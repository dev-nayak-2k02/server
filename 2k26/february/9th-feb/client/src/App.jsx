import Login from './auth/Login'
import Register from './auth/Register'
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Landing from './pages/home/Landing';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
