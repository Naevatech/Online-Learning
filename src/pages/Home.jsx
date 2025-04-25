import React, { useContext, useEffect } from 'react'
import { AppContent } from '../context/AppContext'

function Home() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL 
  const {
    isLoggedin,
    setisLoggedin,
    userData,
    setuserData } = useContext(AppContent)



  return (
    <div>

      <div className='container'>
        <div className="row">
          {
            userData? <h1> ${userData.name} </h1> : backendUrl
              }
          <h1>{import.meta.env.VITE_BACKEND_URL}</h1>
        </div>
      </div>
    </div>
  )
}

export default Home



