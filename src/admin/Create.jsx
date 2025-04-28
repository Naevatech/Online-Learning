import React, { useContext, useEffect, useState } from 'react'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



function Create() {
    const {backendUrl, course} = useContext(AppContent)
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [courses, setCourses] = useState(false)
    const handleCreateCourse = async(e) => {
        e.preventDefault()
        
        axios.defaults.withCredentials = true
        try {
            const {data} =  await axios.post(backendUrl + "/api/course/create", {title, description})
            if (data.success) {
                toast.success(data.message)
                navigate("/create")
            }
            else{
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    

    const allCourse = async (e) => {
        // e.preventDefault()
        axios.defaults.withCredentials = true
        try {
            // const {data} = await axios.get("http://localhost:4000/api/course/allCourse")
            // console.log(data)
            // if (data.success) {
            //     setCourses(data.course)
            // }
            await fetch("http://localhost:4000/api/course/allCourse")
            .then(res=>res.json())
            .then(json=>setCourses(json.course))
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        allCourse()
        console.log(courses)
    }, [])

    const handleCourse = (index) => {
        console.log(index)
    }
    

    return (
        <div>
            <div className="container" style={{ marginTop: "200px" }}>
                <div className="row">
                    <div className="col-md-4 col-6 col-sm-4" style={{ border: "2px solid rgb(31, 168, 56)" }}>
                        <div>
                            <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Create New Course</button>
                        </div>
                    </div>

                    <div className="col-md-4 col-6 col-sm-4" style={{ border: "2px solid rgb(132, 6, 6)" }}>
                        {courses.map((check, index)=>(
                            <p style={{border:"1px solid #808080", padding:"10px", borderRadius:"5px"}} onClick={handleCourse(index)}>{check.title}</p>
                        ))}
                    </div>
                    <div className="col-md-4 col-6 col-sm-4" style={{ border: "2px solid rgb(98, 4, 122)" }}></div>
                </div>
            </div>



            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
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
                                    <button className='btn btn-outline-primary' type="submit">Create Course</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create