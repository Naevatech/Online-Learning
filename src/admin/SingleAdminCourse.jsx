import React from 'react'
import Navbar from '../component/Navbar'
import '../styling/singleCourse.css'
import { PlayCircleFilled, FilePdfFilled, ThunderboltFilled, AppstoreFilled, DingtalkSquareFilled } from '@ant-design/icons'

function SingleAdminCourse() {
    return (
        <div>
            <Navbar>
                <div className='adminCourse-header'>
                    <button className='btn-back'>Back</button>
                    <button className='btn-add'>Add modules</button>
                </div>
                <div className='adminCourse-all'>
                    <div className='adminCourse adminCourse-1'>
                        <h2 className='adminCourse-title'>The complete advance 6-week UI/UX design bootcamp</h2>
                        <p className='adminCourse-desc'>Our 6-week UI/UX bootcamp equips students with the essential skills to become successful designers. We provide hands-on learning opportunities to design and prototype digital products, conduct user research, and create user flows and wireframes.</p>

                        <h4>Content</h4>

                        <div className='adminCourse-all-section'>
                            <div className='adminCourse-section'>
                                <PlayCircleFilled className='adminCourse-icon' />
                                <h6>12 hours on-demand video</h6>
                            </div>

                            <div className='adminCourse-section'>
                                < FilePdfFilled className='adminCourse-icon' />
                                <h6>Download attachment file</h6>
                            </div>
                        </div>

                        <div className='adminCourse-all-section'>
                            <div className='adminCourse-section'>
                                <PlayCircleFilled className='adminCourse-icon' />
                                <h6>Access on mobile TV</h6>
                            </div>

                            <div className='adminCourse-section'>
                                < FilePdfFilled className='adminCourse-icon' />
                                <h6>Certificate of completion</h6>
                            </div>
                        </div>

                        <div className='adminCourse-all-section'>
                            <div className='adminCourse-section'>
                                <PlayCircleFilled className='adminCourse-icon' />
                                <h6>Introduction to UI/UX design bootcamp</h6>
                            </div>

                            <div className='adminCourse-section'>
                                < FilePdfFilled className='adminCourse-icon' />
                                <h6>Download attachment file</h6>
                            </div>
                        </div>
                    </div>

                    {/* second section */}
                    <div className='adminCourse adminCourse-2  adminCourse-section-all'>
                        <img src="./public/woman-records-conversation-audience.jpg" alt="" srcset="" className='adminCourse-img' />

                        <section className='mt-5'>

                            <h5>This course include</h5>
                            <ul className='adminCourse-list'>
                                <li>
                                    <PlayCircleFilled className='adminCourse-icon' />
                                    <span>Introduction to UI/UX design bootcamp</span>
                                </li>

                                <li>
                                    <ThunderboltFilled  className='adminCourse-icon' />
                                    <span>15 downloadable resources</span>
                                </li>

                                <li>
                                    <AppstoreFilled className='adminCourse-icon' />
                                    <span>Access to mobile tv</span>
                                </li>

                                <li>
                                    <DingtalkSquareFilled className='adminCourse-icon' />
                                    <span>Certificate of Completion</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default SingleAdminCourse