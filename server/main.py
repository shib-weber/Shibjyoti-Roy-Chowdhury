import os
from typing import Optional
import httpx
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, field_validator
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# --- PROPER CORS CONFIGURATION ---
allowed_origins = [
    "http://localhost:3000",      
    "http://localhost:5173",       
    "https://shibjyoti-roy-chowdhury.vercel.app"  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization"],
)

# --- PYDANTIC TELEMETRY VALIDATION ---
class FeedbackPayload(BaseModel):
    answer1: str = Field(..., min_length=1, description="Name")
    answer2: str = Field(..., description="Rating (0-5)")
    answer3: str = Field(..., min_length=1, description="Liked most")
    answer4: Optional[str] = None
    answer5: Optional[str] = None

    @field_validator("answer2")
    @classmethod
    def validate_rating(cls, value):
        try:
            parsed_rating = int(value)
        except ValueError:
            raise ValueError("Metric rating must be an integer.")
        
        if parsed_rating < 0 or parsed_rating > 5:
            raise ValueError("Telemetry metric must sit precisely within 0 - 5 bounds.")
        return parsed_rating

class OrderPayload(BaseModel):
    serviceId: str = Field(..., description="Unique ID of selected service category")
    serviceTitle: str = Field(..., description="Plain-text title of selected service")
    name: str = Field(..., min_length=1, description="Client Full Name")
    email: str = Field(..., description="Client Email Address")
    contact: str = Field(..., description="Client Phone or Social handle")
    description: str = Field(..., min_length=5, description="Project requirements text block")
    stack: Optional[str] = Field("", description="Target software/framework stack layout")
    expectedDate: str = Field(..., description="Client's target completion timeline date string")
    offeredPrice: str = Field(..., description="Client budget string or parsed integer string")
    transactionId: Optional[str] = Field("", description="Optional transactional advanced reference")

    @field_validator("email")
    @classmethod
    def validate_email_format(cls, value: str):
        if "@" not in value or "." not in value:
            raise ValueError("Provided string structure must conform to structural standard Email layouts.")
        return value.strip()

# --- DISCORD WEBHOOK CONFIGURATION ---
DISCORD_WEBHOOK_URL = os.getenv("DISCORD_WEBHOOK_URL", "")
ORDERS_WEBHOOK_URL = os.getenv("ORDERS_WEBHOOK_URL", "")


# --- ENDPOINTS ---
@app.post("/feedback", status_code=status.HTTP_201_CREATED)
async def create_feedback(payload: FeedbackPayload):
    # Safety Check: Warn the backend logs if the environment variable wasn't set properly
    if not DISCORD_WEBHOOK_URL:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Server configuration error: Discord Webhook URL is not set."
        )

    try:
        # Format a visually clean Markdown message layout for your Discord channel chat
        discord_content = (
            f"📝 **New User Feedback Received!**\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"👤 **Name:** {payload.answer1}\n"
            f"⭐ **Rating:** {payload.answer2} / 5\n"
            f"❤️ **Liked Most:** {payload.answer3}\n"
            f"🛠️ **Suggested Improvements:** {payload.answer4 or '_None provided_'}\n"
            f"💬 **Additional Comments:** {payload.answer5 or '_None provided_'}\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━"
        )

        # Structure the payload as expected by Discord's Webhook API
        webhook_data = {
            "content": discord_content
        }

        # Dispatch the asynchronous HTTP POST request directly out to Discord's servers
        async with httpx.AsyncClient() as client:
            response = await client.post(DISCORD_WEBHOOK_URL, json=webhook_data)
            
            # If Discord responds with an error code (e.g., 4xx or 5xx), throw a server error
            if response.status_code >= 400:
                raise HTTPException(
                    status_code=status.HTTP_502_BAD_GATEWAY,
                    detail=f"Discord webhook rejected transmission: {response.text}"
                )
                
        return {"status": "SUCCESS"}
        
    except HTTPException as http_err:
        # Pass through the explicit web hook failures safely
        raise http_err
    except Exception as error:
        # Fallback for unexpected connection issues
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail=f"Transmission gateway error: {str(error)}"
        )

@app.post("/api/orders", status_code=status.HTTP_201_CREATED)
async def create_project_order(payload: OrderPayload):
    # Fallback configuration failcheck
    if not ORDERS_WEBHOOK_URL:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Server backend error: Orders channel webhook variable target missing."
        )

    try:
        order_dashboard = (
            f"💼 ⚡ **NEW PROJECT PROPOSAL ROUTED** ⚡ 💼\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"🛠️ **Category Service:** `{payload.serviceTitle}` *(ID: {payload.serviceId})*\n\n"
            f"👤 **Client Identity:** {payload.name}\n"
            f"📧 **Email Endpoint:** {payload.email}\n"
            f"📱 **Direct Connection Info:** `{payload.contact}`\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"📜 **Project Target Specification Requirements:**\n"
            f">>> {payload.description}\n\n"
            f"💻 **Requested Tech Stack:** `{payload.stack or 'Not specified'}`\n"
            f"📅 **Target Deadline Timeline:** `{payload.expectedDate}`\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"💰 **Offered Target Budget:** 💰 **₹{payload.offeredPrice} INR**\n"
            f"🔒 **Token Transaction Verification ID:** "
            f"`{payload.transactionId if payload.transactionId else '⚠️ NO ADVANCE TOKEN PROVIDED ⚠️'}`\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        )

        # Build formal API dictionary required by Discord
        discord_payload = {
            "content": order_dashboard
        }

        # Issue secure background asynchronous HTTP POST dispatch directly to Discord's web gateway
        async with httpx.AsyncClient() as client:
            response = await client.post(ORDERS_WEBHOOK_URL, json=discord_payload)
            
            if response.status_code >= 400:
                raise HTTPException(
                    status_code=status.HTTP_502_BAD_GATEWAY,
                    detail=f"Discord webhook rejected transmission matrix router: {response.text}"
                )
                
        return {"status": "SUCCESS", "detail": "Proposal securely routed to executive team."}

    except HTTPException as api_error:
        raise api_error
    except Exception as generic_error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Secure transmission runtime error: {str(generic_error)}"
        )