const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config()
connectDB()
const app = express()
app.get('/test', (req,res)=> {
    res.status(200).send('welcome to node server')
})
const PORT = process.env.PORT || 3060
app.listen(PORT, ()=>{
    console.log(`PORT:${PORT}, ${process.env.DEV_NODE}`);
})