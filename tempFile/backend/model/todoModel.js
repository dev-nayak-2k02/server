const mongoose= require("mongoose")
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    }
})

const todoModel=mongoose.model("todo",todoSchema);

module.exports=todoModel;