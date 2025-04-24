import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loginuser from './pages/Loginuser'
import Signupuser from './pages/Signupuser'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Loginuser/>} />
        <Route path='/signup' element={<Signupuser/>} />

      </Routes>
    </div>
  )
}

export default App