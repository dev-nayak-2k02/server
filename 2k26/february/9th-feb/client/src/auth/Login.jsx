import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");

  async function showData() {
    try {
      const data = { userName: text, email: mail, password: pwd };
      const res = await axios.post(
        "http://localhost:3070/api/v1/register",
        data,
      );
      toast.success(res.data.message);
      console.log(res.data);
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  }

  function clearData() {
    setMail("");
    setPwd("");
  }

  return (
    <div>
      <input
        type="email"
        value={mail}
        placeholder="enter Email"
        onChange={(e) => setMail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={pwd}
        placeholder="enter password"
        onChange={(e) => setPwd(e.target.value)}
      />
      <br />
      <button onClick={showData}>Login</button>
      <button onClick={clearData}>clear</button>
    </div>
  );
};

export default Login;
