const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs")
const registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(500).send({
        success: false,
        message: "fields are compolsory",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "user already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    console.log("Hello")
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword)
    const newUser = await userModel({ userName, email, password:hashedPassword });
    // const newUser = await userModel({ userName, email, password });
    newUser.save();
    res.status(200).send({
      success: true,
      message: "record added successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "register API",
      error,
    });
  }
};
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "All fields are compolsory",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(500).send({
        success: false,
        message: "invalid credentials", 
      });
    }
    const result = await bcrypt.compare(password, existingUser.password);
    console.log("Hello")
    console.log(res)
    if(!result){
      return(
        res.status(500).send({
          success:false,
          message:"Invalid credentials"
        })
      )
    }
    res.status(200).send({
        success:true,
        message:'login successful',
        user:{
            username:existingUser.userName,
            email:existingUser.email
        }
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "register API",
      error,
    });
  }
};
module.exports = { registerController, loginController };
