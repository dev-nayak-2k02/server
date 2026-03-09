import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
  const [mail, setMail] = useState('')
  const [text, setText] = useState('')
  const [pwd, setPwd] = useState('')

  async function showData(){
    const data = {userName:text, email:mail, password:pwd};
    const res = await axios.post("http://localhost:3070/api/v1/register",data);
    console.log(res.data);
  }

  function clearData() {
    setMail('');
    setPwd('');
    setText('');
  }
  
  return (
    <div>
        <input type="text" placeholder='enter UserName' value={text} onChange={(e)=>setText(e.target.value)}/><br />
        <input type="email" value={mail} placeholder='enter Email' onChange={(e)=>setMail(e.target.value)}/><br />
        <input type="password" value={pwd} placeholder='enter password' onChange={(e)=>setPwd(e.target.value)}/><br />
        <button onClick={showData}>register</button>
        <button onClick={clearData}>clear</button>
    </div>
  )
}

export default Register