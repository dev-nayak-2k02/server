const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
dotenv.config()
connectDB()
const app = express()
app.use(morgan("dev"))
app.use('/api/v1', require('./routes/userRoutes'))
const PORT = process.env.PORT || 3060;
app.listen(PORT, ()=>{
    console.log(`PORT:${PORT}, ${process.env.DEV_NODE}`);
})