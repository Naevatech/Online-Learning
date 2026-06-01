import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import '../styling/dashboard.css'
import Analytics from '../component/Analytics'
import { toast } from 'react-toastify'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'






function Dashboard() {
    const [courses, setCourses] = useState([])
    const { backendUrl } = useContext(AppContent)
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleCreateCourse = async (e) => {
        e.preventDefault()

        axios.defaults.withCredentials = true
        try {
            const { data } = await axios.post(backendUrl + "/api/course/create", { title, description })
            if (data.success) {
                toast.success(data.message)
                navigate("/courses")
            }
            else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
        }
    }

    // const allCourse = async (e) => {
    //     try {
    //         await fetch(backendUrl + "api/course/allCourse", {
    //             credentials: "include"
    //         })
    //             .then(res => res.json())
    //             .then(json => setCourses(json.course))
    //         console.log(courses)
    //         console.log(courses.length)

    //     } catch (error) {
    //         console.log(error)

    //     }
    // }

    const allCourse = async () => {
    try {
        const { data } = await axios.get(
            backendUrl + "/api/course/allCourse",
            { withCredentials: true }
        )

        console.log("Courses API:", data)

        if (data.success) {
            setCourses(data.course)
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        console.log(error)
        toast.error("Failed to load courses")
    }
}

    useEffect(() => {
        console.log("Updated courses:", courses)
    }, [courses])


    return (
        <div>
            <Navbar>
                <Analytics />
                {/* table */}

                <div className='dashboard-empty'>
                    <div className='dashboard-empty-content'>
                        <h4>Manage your course</h4 >
                        {courses.length != 0 ?
                            <p>You currentlly have <b>{courses.length}. You are doing well!!</b></p>
                            :
                            <p>When your create a course, it will show up here</p>
                        }
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Create Course</button>
                    </div>
                </div>



                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Awesome, Create Course</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* CREATE COURSE FORM */}
                                <form onSubmit={handleCreateCourse}>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="input" className="form-control" id="floatingInput"
                                            onChange={e => setTitle(e.target.value)}
                                        />
                                        <label for="floatingInput">Course title</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea type="input" className="form-control" id="floatingdesc"
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                        <label for="floatingdesc">Describe the course</label>
                                    </div>
                                    <div className='d-grid gap-2 mx-auto'>
                                        <button className='btn btn-outline-primary' type="submit" data-bs-dismiss="modal">Create Course</button>

                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default Dashboard