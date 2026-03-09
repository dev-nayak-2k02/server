import Login from './auth/Login'
import Register from './auth/Register'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      {/* <Landing/> */}
      <Register />
      <Login />
      <Toaster />
    </>
  )
}

export default App
