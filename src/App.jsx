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
import CourseDetails from './admin/CourseDetails'
import Footer from './pages/footer'
import Header from './pages/Header'
import Homepage from './pages/Homepage'
import Preview from './pages/Preview'
import SuccessPayment from './payment/SuccessPayment'
import CancelPayment from './payment/CancelPayment'
import PlayVideo from '../player/PlayVideo'
import CoursePage from '../player/CoursePage'
import Learning from './pages/Learning'





function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
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
        <Route path='/courses' element={<Course/>}>
          {/* <Route path='course-modules' element={<CourseDetails/>} /> */}
        </Route>
        <Route path='/module' element={<ModuleAdd/>}></Route>
        <Route path='/single-course' element={<SingleAdminCourse/>}></Route>
        <Route path='/course-modules/:_id' element={<CourseDetails/>} />
        <Route path='/preview-course/:_id' element={<Preview/>} />
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/header' element={<Header/>}></Route>
        {/* <Route path='/homepage' element={<Homepage/>}></Route> */}

        {/* payment */}
        {/* <Route path='/checkout' element= {<CheckoutForm />}></Route>
        <Route path='/complete' element= {<Complete />}></Route> */}
        <Route path='/success' element= {<SuccessPayment />}></Route>
        <Route path='/cancel' element= {<CancelPayment  />}></Route>
        {/* <Route path='/play/:courseId/:moduleId' element={<PlayVideo />} />   */}
        <Route path='/play' element={<PlayVideo />} /> 
        <Route path='/course-video' element={<CoursePage />} />
        <Route path='/learning/:_id' element={<Learning />} />

      </Routes>

      
    </div>
  )
}

export default App