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
    const [pictureThumbnail, setpictureThumbnail] = useState("")
    const [price, setPrice] = useState("")
    const [loading, setLoading] = useState(false);


    const handleCreateCourse = async (e) => {
        e.preventDefault();

        if (!title?.trim()) {
            return toast.error("Course title is required");
        }

        if (!description?.trim()) {
            return toast.error("Course description is required");
        }

        if (!pictureThumbnail) {
            return toast.error("Course thumbnail is required");
        }

        if (!price?.trim() || isNaN(price) || Number(price) <= 0) {
            return toast.error("Valid course price is required");
        }

        setLoading(true);

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/course/create`,
                { title, description, pictureThumbnail, price },
                { withCredentials: true }
            );

            if (data.success) {
                toast.success(data.message);
                navigate("/courses");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

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
        axios.post(backendUrl + "/api/course/uploadImage", { image: base64 })
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
            .catch(console.log(error))
    }


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

    const isFormValid =
        title?.trim() &&
        description?.trim() &&
        pictureThumbnail &&
        price?.trim() && !isNaN(price) && Number(price) > 0;


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
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <label for="floatingInput">Course title</label>
                                    </div>

                                    <div className="form-floating mb-3">

                                        <textarea
                                            className="form-control"
                                            id="floatingdesc"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <label for="floatingdesc">Describe the course</label>
                                    </div>
                                    {/* course cover image upload will be added here */}
                                    <div class="input-group mb-3">
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="DropIMG"
                                            onChange={uploadImages}
                                        />
                                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                    </div>
                                    //price input
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="floatingPrice"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            placeholder="Enter course price"
                                        />
                                        <label for="floatingPrice">Course Price</label>
                                    </div>
                                    <div className='d-grid gap-2 mx-auto'>
                                        <button
                                            type="submit"
                                            className="btn btn-outline-primary"
                                            disabled={!isFormValid || loading}
                                        >
                                            {loading ? "Creating..." : "Create Course"}
                                        </button>
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