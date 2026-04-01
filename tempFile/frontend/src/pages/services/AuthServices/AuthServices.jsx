import axios from "axios";
const loginAuth=(data)=>{
    return  axios.post("http://localhost:3000/api/v1/user/login",data);
}
const registerAuth= (data)=>{
    return axios.post("http://localhost:3000/api/v1/user/register",data);
}
const AuthServices={loginAuth,registerAuth};
export default AuthServices;