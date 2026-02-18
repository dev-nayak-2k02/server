import React, { useState } from 'react'
const Register = () => {
  const [mail, setMail] = useState('')
  const [text, setText] = useState('')
  const [pwd, setPwd] = useState('')

  function showData(){
    console.log(mail);
    console.log(text);
    console.log(pwd);
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