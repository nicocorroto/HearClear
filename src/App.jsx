import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Register' element={< Register/>} />
      <Route path='/Home' element={< Home/>} />
    </Routes>
  )
}

export default App
