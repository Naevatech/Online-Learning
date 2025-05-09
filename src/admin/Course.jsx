import React from 'react'
import Navbar from '../component/Navbar'
import { useState } from 'react'
import '../styling/course.css'

function Course() {
  return (
    <div>
        <Navbar>

            <div className='course-all'>
                <div className='course-1'>
                    <div>
                        <img className='course-img' src="../public/side-view-singer-working-studio.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='course-title'>The completed advance UI/UX Design</h2>
                        <p className='course-desc'>Our 6-week UI/UX bootcamp equips students with the essential skills to become successful designers. We provide hands-on learning opportunities to...</p>
                        {/* button */}
                        <div>
                            <button className='btn-option'>Add modules</button>
                            <button className='btn-option'>View modules</button>
                            <button className='btn-option' >Delete course</button>
                        </div>
                    </div>
                </div>

                <div className='course-1'>
                    <div>
                        <img className='course-img' src="../public/side-view-singer-working-studio.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='course-title'>The completed advance UI/UX Design</h2>
                        <p className='course-desc'>Our 6-week UI/UX bootcamp equips students with the essential skills to become successful designers. We provide hands-on learning opportunities to...</p>
                        {/* button */}
                        <div>
                            <button className='btn-option'>Add modules</button>
                            <button className='btn-option'>View modules</button>
                            <button className='btn-option'>Delete course</button>
                        </div>
                    </div>
                </div>

                <div className='course-1'>
                    <div>
                        <img className='course-img' src="../public/side-view-singer-working-studio.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='course-title'>The completed advance UI/UX Design</h2>
                        <p className='course-desc'>Our 6-week UI/UX bootcamp equips students with the essential skills to become successful designers. We provide hands-on learning opportunities to...</p>
                        {/* button */}
                        <div>
                            <button className='btn-option'>Add modules</button>
                            <button className='btn-option'>View modules</button>
                            <button className='btn-option'>Delete course</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </Navbar>
    </div>
  )
}

export default Course