const todoModel = require("../model/todoModel");
const addTask=async (req,res)=>{
    const {title}=req.body;
    if(!title){
        return res.status(500).send({
            message:"The textbox cannot be empty",
            success:false
        })
    }
    const task=await todoModel({title});
    await task.save();
    return res.status(200).send({
        success:true,
        message:"Task Added Successfull"
    })
}
const deleteTask=async (req,res)=>{
    const {title}=req.body;
    if(!title){
        return res.status(500).send({
            message:"The textbox cannot be empty",
            success:false
        })
    }
    const findTask=await todoModel.findOne({title});
    if(!findTask){
        return res.status(500).send({
            success:false,
            messge:"Task not found"
        })
    }
    await todoModel.findOneAndDelete({title});
    return res.status(200).send({
        success:true,
        message:"Task Deleted Successfully"
    })
}
const updateTask=async (req,res)=>{
    const {title,newTitle}=req.body;
    if(!title){
        return res.status(500).send({
            message:"The textbox cannot be empty",
            success:false
        })
    }
    const task=await todoModel.findOne({title});
    if(!task){
        return res.status(500).send({
            success:false,
            messge:"Task not found"
        })
    }
    await todoModel.findOneAndUpdate({title},{title:newTitle})
    return res.status(200).send({
        success:true
    })
}

const showAll=async(req,res)=>{
    try {
        const data=await todoModel.find({});
        res.status(200).send({
            success:true,
            todos:data
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Unable to fetch Data"
        })
    }
}
module.exports={addTask,deleteTask,updateTask,showAll}