import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import '../styling/course.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import axios from 'axios'



function Course() {
    const [courses, setCourses] = useState([])
    const { backendUrl } = useContext(AppContent)
    const navigate = useNavigate()

    const [courseID, setcourseID] = useState("")
    const [createModules, setcreateModules] = useState(false)
    const [topic, settopic] = useState("")
    const [url, setvideoLink] = useState("")
    const [pictureThumbnail, setpictureThumbnail] = useState("")
    const [duration, setDuration] = useState("")

    const allCourse = async (e) => {
        try {
            await fetch(backendUrl + "/api/course/allCourse")
                .then(res => res.json())
                .then(json => setCourses(json.course))
            console.log(courses)
            console.log(courses.length)

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        allCourse()
        console.log(courses)
    }, [])

    // TO BASE 64
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    //upload to cloudinary
    const uploadImages = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        console.log(base64)
        // setloading("I'm loading")
        axios.post("http://localhost:4000/api/course/uploadImage", { image: base64 })
            .then((res) => {
                if (res.data) {
                    toast.success("Image uploaded successfully")
                    setpictureThumbnail(res.data)
                    console.log(res.data)
                }
                else {
                    toast.error("Error!, kindly upload again")
                }
            })
            .catch(error)
    }

    const handleCourse = (id) => {
        setcourseID(id)
        setcreateModules(true)

    }

    const handleCreateModules = async (e) => {
        e.preventDefault()
        axios.defaults.withCredentials = true
        try {
            const { data } = await axios.post(backendUrl + "/api/course/add", { courseID, topic, pictureThumbnail, url, duration })
            if (data.success) {
                toast.success(data.message)
                setcreateModules(false)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar>

                {/* redesign card */}
                <div className='row'>
                    {courses.map((check, index) => (
                        <div className='col-sm-4'>

                            <div className="card mb-3" key={index}>
                                <img className='card-img-top' src="../public/side-view-singer-working-studio.jpg" alt="" srcset="" />
                                <div className="card-body">
                                    <h5 className="card-title">{check.title}</h5>
                                    <p className="card-text">{check.description}</p>
                                    <div>
                                        <button className='btn-option' onClick={() => handleCourse(check._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">Add modules</button>
                                        <button className='btn-option'> <Link to={`/course-modules/${check._id}`} >View modules</Link></button>
                                        <button className='btn-option' >Delete course</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>


                

                {/* //Creating modules */}

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <form onSubmit={handleCreateModules}>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="input" className="form-control" id="floatingInput"
                                            onChange={e => settopic(e.target.value)}
                                        />
                                        <label for="floatingInput">Course Topic</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea type="input" className="form-control" id="floatingdesc"
                                            onChange={e => setvideoLink(e.target.value)}
                                        />
                                        <label for="floatingdesc">Video Link</label>
                                    </div>

                                    <div class="input-group mb-3">
                                        <input type="file" class="form-control" id="DropIMG" onChange={uploadImages} />
                                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea type="input" className="form-control" id="floatingdesc"
                                            onChange={e => setDuration(e.target.value)}
                                        />
                                        <label for="floatingdesc">Duration</label>
                                    </div>

                                    <div className='d-grid gap-2 mx-auto'>
                                        <button className='btn btn-outline-primary' type="submit">Create Course</button>
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Navbar>
        </div>
    )
}

export default Course