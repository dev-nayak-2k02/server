const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config()
connectDB()
const app = express()
app.use("/api/v1", require('./routes/userRoutes'))
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`sever is running at PORT: ${PORT}`)
})