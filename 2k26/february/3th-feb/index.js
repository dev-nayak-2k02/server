const express = require('express');
const connectDB = require('../3th-feb/config/db');
const app = express()
connectDB()
const PORT = 4000;
app.listen(PORT, ()=>{
    console.log(`server is running at PORT:${PORT}`)
})