    const projects = [
            {
        project:"Project 1",
        title: "Meta-Analysis and Consensus System for Crop Climate Data",
        description: `A decentralized, AI-powered platform for submitting and validating research on crop climate impact. 
    Paper submitters can upload research data, while meta-validators vote via smart contracts to achieve consensus on paper validity. 
    Integrates Google BigQuery to perform high-performance, massive-scale analytics on historical agricultural and climate datasets. 
    Blockchain backend is built with Solidity and Ganache, using Pinata for decentralized IPFS storage of research documents. 
    MetaMask integration ensures secure cryptographic voting, and FastAPI powers the high-speed backend server for AI analytics. 
    Features a strict role-based user management dashboard built natively using React. 
    Eliminates centralized academic bias and leverages AI insights to accelerate data-driven climate resilience in agriculture. 
    This project demonstrates my proficiency in combining Web3 architectures, AI analysis, and decentralized governance.`,
        link: "https://github.com/shib-weber/Climate-Crop-Meta-Analysis-Consensus",
        live: "https://climate-crop-meta-analysis-consensu.vercel.app"
    },
    {
        project: "Project 2",
        title: "HandWritter – Computer Vision Virtual Canvas",
        description: `An innovative, touchless virtual drawing canvas powered by real-time computer vision and hand tracking. 
    Using Python and OpenCV, the system tracks hand landmarks to translate physical gestures into digital screen actions. 
    Features intuitive gesture controls: writing with a single finger, skipping/hovering when using two fingers, and erasing data when all fingers are extended. 
    Implements high-frequency coordinate tracking and smooth line-rendering algorithms to eliminate latency. 
    Provides a completely hands-free user interface, ideal for digital whiteboards, presentations, and accessible computing tools. 
    The application processes video feeds frame-by-frame with minimal CPU overhead for real-time responsiveness. 
    This project greatly enhanced my skills in matrix manipulation, computer vision logic, and human-computer interaction (HCI).`,
        link: "https://github.com/shib-weber/HandWritter",
        live: "https://github.com/shib-weber/HandWritter"
    },
    {
        project: "Project 3",
        title: "Multi-Face Gender & Emotion Detection System",
        description: `A high-performance computer vision pipeline capable of detecting gender and emotional states for multiple individuals simultaneously in a single frame. 
    Built using Python and optimized deep learning libraries to achieve a strong 90% accuracy across diverse testing environments. 
    Leverages advanced face detection algorithms to isolate facial regions before passing them to concurrent classification heads. 
    Processes live video feeds or static images in real-time with optimized frame rates for smooth, low-latency bounding box overlays. 
    Categorizes emotions into primary expressions and maps gender profiles instantaneously with confidence scores. 
    Ideal for audience analytics, smart retail insights, user experience testing, and security systems. 
    This project significantly advanced my capabilities in model optimization, multi-task learning, and deep learning deployment frameworks.`,
        link: "https://github.com/shib-weber/Gender-And-Emotion-Detector",
        live: "https://github.com/shib-weber/Gender-And-Emotion-Detector"
    },
        {
        project:"Project 4",
        title: "Dead Sector Game",
        description: `This project is a cutting-edge, mobile-first Progressive Web App (PWA) featuring an immersive 3D third-person shooting experience. It blends high-fidelity assets created in Blender and animated via Adobe Mixamo with reactive state management on the frontend and an asynchronous high-performance backend power grid driven by Python FastAPI. Players can select unique characters, drop into a seamless layout interface, and clear a challenging 3-stage monster combat system.`,
        link: "https://github.com/shib-weber/Dead-Sector",
        live:"https://dead-sector.vercel.app"
    },
            {
        project:"Project 5",
        title: "ChatWat – Web-Based Chatting Platform",
        description: `ChatWat is a real-time web-based chat application built using Node.js, Socket.io, and React. 
    It enables users to create accounts, send and receive messages in real-time, and view active users. 
    The chat interface mimics modern messaging platforms, including live typing indicators. 
    Socket.io ensures low-latency, bidirectional data communication between users. 
    UI is designed with React and styled with Tailwind CSS for sleek usability. 
    Secure user authentication and message delivery add to the integrity of the system. 
    Ideal for small teams, friend groups, or internal corporate chatrooms. 
    This project helped me gain experience in WebSockets and event-based programming.`,
        link: "https://github.com/shib-weber/ChatWat",
        live:"https://chatwat.onrender.com"

    },
    {
        project:"Project 6",
        title: "Personal Portfolio Website",
        description: `A fully responsive and visually elegant portfolio website crafted using React and Tailwind CSS. 
    It serves as a central hub for showcasing my academic background, technical expertise, and live projects. 
    Animations and transitions are smoothly integrated using Framer Motion to enhance interactivity. 
    Built with a black theme and minimalist UI, it reflects a professional developer’s identity. 
    Includes dedicated sections for education, skills, contact, and tech stack. 
    Responsive across all devices with optimized performance for smooth loading. 
    Also includes SVG animations and interactive effects to engage visitors. 
    Designed from scratch, this project highlights both front-end design and code structuring skills.`,
        link: "https://github.com/shib-weber/Shibjyoti-Roy-Chowdhury",
        live:"shibjyoti-roy-chowdhury.vercel.app"
    },
    {
        project:"Project 7",
        title: "Expense Manager",
        description: `A feature-rich web app that allows users to manage and visualize their day-to-day expenses. 
    Users can input expenses, categorize them, and generate pie charts and line graphs for tracking. 
    Chart.js is used for visually appealing and interactive data presentation. 
    Built using React for the front end and localStorage for persistent state. 
    Dark/light theme toggle enhances accessibility and UI comfort. 
    Simplifies budgeting and helps users analyze spending habits over time. 
    Clean and responsive layout ensures a good experience on all screen sizes. 
    This app reflects my interest in personal productivity tools and data visualization.`,
        link: "https://github.com/shib-weber/SpendWise",
        live:"https://Spend-wise-blond-five.vercel.app"
    },
    {
        project: "Project 8",
        title: "AyurSutra – Ayurvedic Patient Care Platform",
        description: `A comprehensive full-stack healthcare platform tailored for Ayurvedic medicine, featuring robust role-based authentication and clinical workflows. 
    Enables patients to securely book appointments and provides healthcare practitioners with tools for constant health monitoring and vital tracking. 
    Integrates an intelligent system for personalized Ayurvedic medicine recommendations and built-in protocols for emergency patient handling. 
    Designed for seamless integration with national health standards like Ayush Ayurvedic frameworks to ensure medical compliance. 
    Built using Node.js for scalable API development, MongoDB for flexible health record storage, and React for a responsive frontend interface. 
    Ensures safe data isolation between patients, doctors, and administrators through cryptographic access controls. 
    This project demonstrates my ability to build highly secure, workflow-heavy enterprise systems within the digital health tech space.`,
        link: "https://github.com/shib-weber/AyurSutra",
        live: "https://ayur-sutra-seven.vercel.app"
    },
    {
        project:"Project 9",
        title: "Farmer Seller Platform",
        description: `A full-stack web platform bridging farmers and companies directly for crop selling. 
    Farmers can register and post crop listings with prices, while companies can bid and negotiate. 
    After accepting bids, the system manages contracts, delivery timelines, and payment tracking. 
    Built using MongoDB, Express, React, and Node.js with authentication for both roles. 
    Reduces dependency on middlemen, ensuring better pricing for farmers. 
    Has dedicated dashboards for both farmers and buyers with bid status updates. 
    Security is managed through JWT tokens, and real-time updates enhance responsiveness. 
    This project addresses agricultural inefficiencies using tech-enabled fair trade.`,
        link: "https://github.com/shib-weber/FarmerCo.in",
        live:"https://github.com/shib-weber/FarmerCo.in"
    },
    {
        project:"Project 10",
        title: "Event Ticket Booking System",
        description: `An online ticket booking system for events with live seat tracking and interactive UI. 
    Users can register, browse events, view seat availability in real-time, and book with ease. 
    UI designed to mirror real-world ticketing with QR code generation for booked seats. 
    Admin panel allows event organizers to add and manage events and bookings. 
    Responsive design ensures seamless booking on desktop and mobile devices. 
    Built using MERN stack, with seat-locking mechanism to avoid double bookings. 
    Includes payment simulation and confirmation via email for a professional touch. 
    This system demonstrates my ability to build user-friendly yet complex workflows.`,
        link: "https://github.com/shib-weber/Ticket-Booking-System",
        live:"https://github.com/shib-weber/Ticket-Booking-System"
    },
    {
        project: "Project 11",
        title: "Lumina – Personal AI Assistant",
        description: `An intelligent personal AI assistant tailored and trained on a curated personal dataset to securely answer queries about my background and professional journey. 
    Acts as a responsive virtual assistant, capable of contextual conversations while filtering out sensitive or private information. 
    Implements strict data privacy guardrails to protect user integrity while providing precise, informative answers to external visitors. 
    Engineered with conversational context awareness, allowing for natural, multi-turn dialogue structures. 
    The system bridges frontend UI elements with an underlying large language model (LLM) fine-tuned or prompted with custom knowledge graphs. 
    Provides an interactive, novel way for recruiters and clients to explore my portfolio, skills, and project history asynchronously. 
    This project enhanced my practical expertise in data engineering, privacy-centric AI alignment, and intelligent agent workflows.`,
        link: "https://github.com/shib-weber/Lumina-Assistance",
        live: "https://shib-weber.github.io/Lumina-Assistance/"
    },
        {
        project:"Project 12",
        title: "MyPortfolio – Live Portfolio Builder",
        description: `A drag-and-drop portfolio builder that empowers users to design their own personal websites. 
    Users can choose layouts, change color themes, insert text/images, and position elements freely. 
    Portfolios can be saved, viewed live, and shared as public links. 
    The UI features smooth transitions, animations, and a creative template engine. 
    Includes user auth and database integration for saved designs. 
    Ideal for non-coders who want to build professional portfolios effortlessly. 
    Combines creativity, customization, and simplicity into a single tool. 
    This app reflects my passion for UI/UX and user-centered development.`,
        link: "https://github.com/shib-weber/MyPortfolio",
        live:"https://myportfolio-98i0.onrender.com"
    },
    
    {
        project:"Project 13",
        title: "Bcrypt Hash Decoder",
        description: `An ethical hacking tool that attempts to decode bcrypt hashes through dictionary attacks. 
    Useful for cybersecurity demonstrations, educational purposes, and testing password strengths. 
    Implements common decoding logic to reverse hash to readable formats (when possible). 
    Helps demonstrate vulnerabilities of weak or common passwords. 
    Backend powered by Node.js and bcrypt.js with frontend for UI interaction. 
    Designed with caution and intended only for responsible ethical use. 
    This tool helped me understand hashing mechanisms and password security. 
    Serves as a cybersecurity awareness and ethical testing utility.`,
        link: "https://github.com/shib-weber/Bcrypt-Hash-Decoder",
        live:"https://bcrypt-hash-decoder.onrender.com"
    },
    {
        project:"Project 14",
        title: "AI-Powered Tic-Tac-Toe Game",
        description: `A classic game reimagined with AI using the Minimax algorithm for unbeatable gameplay. 
    The bot plays with optimal moves ensuring it either wins or draws every time. 
    Users can choose difficulty levels or play against another human player. 
    Sleek, animated game board enhances the gameplay experience. 
    React and JavaScript form the core logic and interactivity of the game. 
    Great demonstration of game logic, recursion, and decision trees in AI. 
    Simple UI with strategic depth makes it ideal for learning and entertainment. 
    This game reflects my understanding of AI logic implementation in front-end projects.`,
        link: "https://github.com/shib-weber/Tic-Tac-Toe",
        live:"https://shib-weber.github.io/Tic-Tac-Toe/"
    },


    {
        project:"Project 15",
        title: "Notes – Personal Note Sharing App",
        description: `A clean and secure notes application where users can create, edit, and share personal notes. 
    Users can tag and organize their notes, and optionally share them with selected contacts. 
    Authentication system ensures privacy and ownership of content. 
    Data is stored securely, and UI supports markdown editing for advanced formatting. 
    Built with the MERN stack and Tailwind for smooth user experience. 
    Perfect for both students and professionals managing quick thoughts or plans. 
    Dark/light mode switcher and real-time sync elevate user satisfaction. 
    This project enhanced my skills in CRUD operations and RESTful APIs.`,
        link: "https://github.com/shib-weber/Notes",
        live:"https://notes-mxd9.onrender.com"
    },
    ];

    export default projects;
