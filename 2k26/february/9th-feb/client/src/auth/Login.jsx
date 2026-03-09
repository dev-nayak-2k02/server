import React, { useState } from 'react'
const Login = () => {
  const [mail, setMail] = useState('')
  const [pwd, setPwd] = useState('')

  function showData(){
    console.log(mail);
    console.log(pwd);
  }

  function clearData() {
    setMail('');
    setPwd('');
  }
  
  return (
    <div>
        <input type="email" value={mail} placeholder='enter Email' onChange={(e)=>setMail(e.target.value)}/><br />
        <input type="password" value={pwd} placeholder='enter password' onChange={(e)=>setPwd(e.target.value)}/><br />
        <button onClick={showData}>Login</button>
        <button onClick={clearData}>clear</button>
    </div>
  )
}

export default Login