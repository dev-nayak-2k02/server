const userModel = require("../model/userModel");
const JWT = require('jsonwebtoken')
const bcrypt=require("bcrypt")
const register=async (req,res)=>{
    try {
        const {userName,email,password}=req.body;
        if(!userName||!email||!password){
            return res.status(500).send({
                success:false,
                message:"All fields are compulsory"
            })
        }
        const existingUser=await userModel.findOne({email});
        if(existingUser){
            return res.status(200).send({
                message:"User Already exist Try Logging in",
                success:false
            })
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const user=await userModel({userName,email,password:hashedPassword});
        await user.save();
        res.status(200).send({
            message:"Registration Successful",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(500).send({
                success:false,
                message:"All fields are compulsory"
            })
        }
        const existingUser=await userModel.findOne({email});
        if(!existingUser){
            return res.status(500).send({
                message:"Register First",
                success:false
            })
        }
        const check= await bcrypt.compare(password,existingUser.password);
        const token = await JWT.sign({id:existingUser._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        if(!check){
            return res.status(500).send({
                message:"Wrong Password",
                success:true
            })
        }

        res.status(200).send({
            message:"Login Successful",
            success:true,
            token
        })
        
    } catch (error) {
        console.log(error);
    }
}

module.exports={register,login}