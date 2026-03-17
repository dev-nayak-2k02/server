import Login from './auth/Login'
import Register from './auth/Register'
import toast,{ Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Landing from './pages/home/Landing';
import Todos from './components/Todos';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Todos' element={<Todos/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
