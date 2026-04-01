import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../services/AuthServices/AuthServices";

const Register= () => {
    const navigate=useNavigate();
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=async ()=>{
        try {
            const data={userName,email,password}
            const res=await AuthServices.registerAuth(data);
            toast.success(res.data.message)
            navigate("/login")
        } catch (error) {
            console.log(error);
            toast.error("Registration Error")
        }
    }
    return (
    <div>
        <input type="text" placeholder="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />    
        <input type="email" placeholder="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />    
        <input type="password" value={password} placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />    
        <button onClick={handleSubmit}>Register</button>
        <p>Already Registered , Try <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register