const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes/routes");
const cors=require("cors");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
connectDB();
const PORT=process.env.PORT;

const app=express();

app.use(cors())
app.use(express.json())
app.use("/api/v1/user",router)
app.use("/api/v1/todo",todoRoutes)

app.listen(PORT,()=>{
    console.log(`Server is runnign on PORT ${PORT}`)
})