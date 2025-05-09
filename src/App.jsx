import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loginuser from './pages/Loginuser'
import Signupuser from './pages/Signupuser'
import { ToastContainer } from 'react-toastify'
import SingleCourse from './pages/SingleCourse'
import Create from './admin/Create'
import Navbar from './component/Navbar'
import Signup from './admin/Signup'
import Login from './admin/Login'
import Dashboard from './admin/Dashboard'
import StudentList from './admin/StudentList'
import CreateCours from './admin/CreateCours'
import Course from './admin/Course'
import ModuleAdd from './admin/ModuleAdd'
import SingleAdminCourse from './admin/SingleAdminCourse'




function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Loginuser/>} />
        <Route path='/signup' element={<Signupuser/>} />
        <Route path='/courseview' element={<SingleCourse/>} />
        <Route path="/create" element={<Create/>}></Route>
        <Route path='/nav' element={<Navbar/>}></Route>

        {/* admin */}
        <Route path='/admin' element={<Signup/>}></Route>
        <Route path='/admin-login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/student' element={<StudentList/>}></Route>
        <Route path='/create-course' element={<CreateCours/>}></Route>
        <Route path='/courses' element={<Course/>}></Route>
        <Route path='/module' element={<ModuleAdd/>}></Route>
        <Route path='/single-course' element={<SingleAdminCourse/>}></Route>
      </Routes>
    </div>
  )
}

export default App