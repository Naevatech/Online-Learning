import React, { useContext, useEffect } from 'react'
import { AppContent } from '../context/AppContext'

function Home() {
  const {userData, setuserData } = useContext(AppContent)



  return (
    <div>

      <div className='container'>
        <div className="row">
          {
            userData ? <h1> {userData.name[0]} </h1> : "Welcome"
              }
        </div>
      </div>
    </div>
  )
}

export default Home



