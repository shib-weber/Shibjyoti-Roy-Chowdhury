const express = require("express")
const bodyParser = require("body-parser")

const PORT=5000
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Server is active')
})

app.listen(PORT,()=>{
    console.log('Server is running in port :',PORT)
})