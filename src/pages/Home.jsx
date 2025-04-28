import React, { useContext, useEffect } from 'react'
import { AppContent } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { userData, setuserData } = useContext(AppContent)
  const navigate = useNavigate()



  return (
    <div>

      {/* <div className='container'>
        <div className="row">
          {
            userData ? userData.name[0] : navigate("/login")
          }
        </div> */}

      {/* </div> */}

      {/* design start here */}

      <div className='container'>
        <div className="d-flex gap-2 col" style={{flexWrap:"wrap"}}>
          <div className='col-md-3 col-sm-6 col-12 p-1' style={{border:"1px solid  rgb(220, 220, 220)", borderRadius:"10px"}}>
              <img src="/af.jpg" className='mb-3' alt="" srcset="" style={{width:"315px", borderRadius:"10px", justifyContent:"center"}} />
                <h1 className='fs-5'>Beginners Guide to HTML</h1>
              <div className="d-flex" >
                <button className='btn btn-outline-primary btn-sm'>Buy Course</button>
              </div>
          </div>

          <div className='col-md-3 col-sm-6 col-12 p-1' style={{border:"1px solid  rgb(220, 220, 220)", borderRadius:"10px"}}>
              <img src="/af.jpg" className='mb-3' alt="" srcset="" style={{width:"315px", borderRadius:"10px", justifyContent:"center"}} />
                <h1 className='fs-5'>Beginners Guide to HTML</h1>
              <div className="d-flex" >
                <button className='btn btn-outline-primary btn-sm'>Buy Course</button>
              </div>
          </div>

          <div className='col-md-3 col-sm-6 col-12 p-1' style={{border:"1px solid  rgb(220, 220, 220)", borderRadius:"10px"}}>
              <img src="/af.jpg" className='mb-3' alt="" srcset="" style={{width:"315px", borderRadius:"10px", justifyContent:"center"}} />
                <h1 className='fs-5'>Beginners Guide to HTML</h1>
              <div className="d-flex" >
                <button className='btn btn-outline-primary btn-sm'>Buy Course</button>
              </div>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Home



