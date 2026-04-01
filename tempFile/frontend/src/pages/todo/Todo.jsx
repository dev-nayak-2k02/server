import { useState } from 'react'
import axios from "axios"

import {toast} from "react-hot-toast";
const Todo = () => {
  const [data,setData]=useState([]);
  const [title,setTitle]=useState("");
   const addTodo=async ()=>{
      try {
      const res=await axios.post("http://localhost:3000/api/v1/todo/add",{title});
      toast.success(res.data.message);
      
    } catch (error) {
        toast.error(error.response?.data?.message)
        console.log(error);
    }
  }
  const showAll=async()=>{
    try {
      const res=await axios.get("http://localhost:3000/api/v1/todo/getall");
      setData(res.data.todos)
      console.log(data)
    } catch (error) {
        toast.error(error.response?.data?.message)
        console.log(error);
      
    }
  }
  return (
    <div>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> 
      <button onClick={addTodo}>Add</button>
      <p>{title}</p>
       <button onClick={showAll}>Show All</button>
      {data.map((item)=><p key={item._id}>{item.title}</p>)}
    </div>
  )
}

export default Todo
