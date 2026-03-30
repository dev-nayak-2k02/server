const express=require("express");
const {addTask, updateTask, deleteTask, showAll} = require("../controller/todoController");
const todoRoutes=express.Router();

todoRoutes.post("/add",addTask);
todoRoutes.post("/delete",deleteTask);
todoRoutes.post("/update",updateTask);
todoRoutes.get("/getall",showAll);
module.exports=todoRoutes