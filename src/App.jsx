import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loginuser from './pages/Loginuser'
import Signupuser from './pages/Signupuser'
import { ToastContainer } from 'react-toastify'
import SingleCourse from './pages/SingleCourse'
function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Loginuser/>} />
        <Route path='/signup' element={<Signupuser/>} />
        <Route path='/courseview' element={<SingleCourse/>} />

      </Routes>
    </div>
  )
}

export default App