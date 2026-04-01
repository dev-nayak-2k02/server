import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../services/AuthServices/AuthServices";
import { getErrorMesaage } from "../../../utils/ErrorMesaage";
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async ()=>{
        try {
            const data={email,password}
            const res = await AuthServices.loginAuth(data);
            toast.success(res.data.message);
            localStorage.setItem("todoapp",JSON.stringify(res.data))
            console.log(res)
            navigate("/todos")
        } catch (error) {
            console.log(error);
            const msg = getErrorMesaage(error)
            toast.error(msg)
        }
    }
  return (
    <div>
        <input type="email" value={email} placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} />    
        <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />    
        <button onClick={handleSubmit}>Login</button>
        <p>Not Registered yet?<Link to="/register">Register</Link>now</p>
    </div>
  )
}

export default Login
