const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
const router = require('./routes/userRoutes')
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/v1", router)
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`PORT:${PORT}, ${process.env.DEV_NODE}`);
})