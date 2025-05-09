import React from 'react'
import '../styling/dashboard.css'
function Analytics() {
  return (
    <div>
        <div className="dashboard-content">
                    <div className='content content-1'>
                        <div className='content-all'>
                            <h6>Student Enrol</h6>
                            <img className='student' src="./public/create.png" alt="" srcset="" />
                        </div>
                        <div>
                            <h1>85</h1>
                        </div>
                    </div>

                    <div className='content content-1'>
                        <div className='content-all'>
                            <h6>Course Created</h6>
                            <img className='student' src="./public/course.png" alt="" srcset="" />
                        </div>
                        <div>
                            <h1>495</h1>
                        </div>
                    </div>

                    <div className='content content-1'>
                        <div className='content-all'>
                            <h6>Total Revenue</h6>
                            <img className='student' src="./public/revenue.png" alt="" srcset="" />
                        </div>
                        <div>
                            <h1>$958.06</h1>
                        </div>
                    </div>

                    <div className='content content-1'>
                        <div className='content-all'>
                            <h6>Total Enrolment</h6>
                            <img className='student' src="./public/create.png" alt="" srcset="" />
                        </div>
                        <div>
                            <h1>150</h1>
                        </div>
                    </div>

                </div>
    </div>
  )
}

export default Analytics