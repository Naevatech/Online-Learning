import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'

function SingleCourse() {
    const { backendUrl, userData, } = useContext(AppContent)
    const [courses, setCourses] = useState([])
    const [userID, setUserID] = useState("")
    const navigate = useNavigate()

    const allCourse = async () => {
        try {
            const response = await fetch(backendUrl + "/api/user/enrolledCourses", {
                method: 'GET',
                // CRITICAL: This allows the browser to send the cookie
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (data.success) {
                setCourses(data.courses);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };

    useEffect(() => {
        allCourse()
        console.log("courses:", courses)
        setUserID(userData._id)
    }, [userData])
    return (
        <div>
            <Header />
            <section className="container py-5 mt-5">
                <div className="row g-4">
                    {courses.map((data, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-xl-3" key={index}>
                            <div className="card h-100 border-0 shadow-sm transition-hover">
                                <img
                                    className="card-img-top"
                                    src="../public/side-view-singer-working-studio.jpg"
                                    alt={data.courseData.title}
                                    style={{ height: '180px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-dark">{data.courseData.title}</h5>
                                    <p className="card-text text-muted small flex-grow-1">
                                        {data.courseData.description}
                                    </p>

                                    <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                        <Link
                                            to={`/learning/${data.courseData._id}`}
                                            className="btn btn-sm text-white px-3 border-0"
                                            style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)' }}
                                        >
                                            Start Learning
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SingleCourse