import React from 'react'
import Navbar from '../component/Navbar'
import '../styling/dashboard.css'
import Analytics from '../component/Analytics'



function Dashboard() {
    return (
        <div>
            <Navbar>
            <Analytics />
                {/* table */}

                <div className='dashboard-empty'>
                    <div className='dashboard-empty-content'>
                        <h4>Manage your course</h4 >
                        <p>When your create a course, it will show up here</p>
                        <button>Create Course</button>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default Dashboard