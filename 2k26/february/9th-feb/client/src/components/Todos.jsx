import React, { useState } from 'react'
const Todos = () => {
    const[todos, setTodos] = useState()
    function handletodos(e){
        e.preventDefault();
    }
  return (
    <>
        <input type="text" value={todos} onChange={(e)=>e.target.value}/>
        <button >addItems</button>
    </>
  )
}

export default Todos