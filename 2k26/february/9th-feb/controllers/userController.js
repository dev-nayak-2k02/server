const userModel = require('../model/userModel')
const registerController = async(req, res)=>{
    try {
        const{userName,email,password} = req.body;
        if(!userName || !email || !password){
            return(
                res.status(500).send({
                    success:false,
                    message:'fields are compolsory'
                })
            )
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return(
                res.status(500).send({
                    success:false,
                    message:'user already exists'
                })
            )
        }
        const newUser = await userModel({userName,email,password})
        newUser.save()
        res.status(200).send({
            success:true,
            message:'record added successfully',
            newUser
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'register API',
            error
        })
    }
}
module.exports = registerController