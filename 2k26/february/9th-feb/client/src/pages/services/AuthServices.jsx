 import axios from "axios";
 const loginAuth = (data)=>{
    return axios.post(
        "http://localhost:3070/api/v1/login",
        data)
 }
 const registerAuth = (data)=>{
    return axios.post(
        "http://localhost:3070/api/v1/register",
        data,
      );
 }
 const AuthServices = {loginAuth, registerAuth}
 export default AuthServices