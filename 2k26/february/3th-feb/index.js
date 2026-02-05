const express = require('express');
const connectDB = require('../3th-feb/config/db');
const dotenv = require('dotenv')
dotenv.config()
const app = express()
connectDB()
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server is running at PORT:${PORT}`)
})