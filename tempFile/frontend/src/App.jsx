import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import {Toaster} from "react-hot-toast"
import Todo from "./pages/todo/Todo"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import Navbar from "./components/Navbar/Navbar"
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/todos" element={<Todo/>} ></Route>
      </Routes>
      <Toaster/>    
    </>
  )
}

export default App
