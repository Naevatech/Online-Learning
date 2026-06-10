import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { AppContent } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'




function Homepage() {
    const { backendUrl, userData, } = useContext(AppContent)
    const [courses, setCourses] = useState([])
    const [userID, setUserID] = useState("")
    const navigate = useNavigate()
    const allCourse = async (e) => {
        try {
            await fetch(backendUrl + "/api/course/allCourse")
                .then(res => res.json())
                .then(json => setCourses(json.course))


        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        allCourse()
        // console.log(courses)
        console.log("courses:", userData._id)
        setUserID(userData._id)
    }, [userData])


    return (
        <div>
            <Header />
            <div className="container-fluid p-0">

                <section className="py-5 py-lg-10 bg-light" style={{ background: 'linear-gradient(to bottom, #f0f7ff, #ffffff)' }}>
                    <div className="container">
                        <div className="row align-items-center g-5">

                            <div className="col-12 col-lg-6 order-2 order-lg-1">
                                <div className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 mb-4 fw-semibold">
                                    Trusted by 50,000+ students worldwide
                                </div>

                                <h1 className="display-4 fw-bold mb-4">
                                    Learn New Skills <br />
                                    <span style={{
                                        background: 'linear-gradient(to right, #2563eb, #9333ea)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                        Anytime, Anywhere
                                    </span>
                                </h1>

                                <p className="lead text-muted mb-5" style={{ maxWidth: '500px' }}>
                                    Access thousands of expert-led courses in technology, business, design, and more.
                                    Start your learning journey today.
                                </p>

                                <div className="d-flex flex-column flex-sm-row gap-3">
                                    <button className="btn btn-lg text-white border-0 px-4 py-3 shadow-sm" style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)' }}>
                                        Start Learning Free
                                    </button>
                                    <button className="btn btn-lg btn-outline-dark px-4 py-3">
                                        Watch Demo
                                    </button>
                                </div>

                                <div className="d-flex align-items-center gap-4 mt-5 pt-4 border-top border-light">
                                    <div className="d-flex align-items-center">
                                        <div className="fw-bold fs-5 text-dark me-2">50,000+</div>
                                        <div className="small text-secondary">Active Students</div>
                                    </div>
                                    <div className="vr text-secondary opacity-25" style={{ height: '30px' }}></div>
                                    <div className="fw-bold fs-5 text-dark">4.8/5.0 <span className="small fw-normal text-secondary">Rating</span></div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 order-1 order-lg-2">
                                <div className="rounded-4 overflow-hidden shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                        alt="Online Learning"
                                        className="img-fluid w-100"
                                        style={{ minHeight: '400px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container py-5 mt-5">
                    <div className="row g-4">
                        {courses.map((data, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-xl-3" key={index}>
                                <div className="card h-100 border-0 shadow-sm transition-hover">
                                    <img
                                        className="card-img-top"
                                        src={data.pictureThumbnail}
                                        alt={data.title}
                                        style={{ height: '180px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title fw-bold text-dark">{data.title}</h5>
                                        <p className="card-text text-muted small flex-grow-1">
                                            {data.description}
                                        </p>

                                        <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span className="fs-5 fw-bold text-dark">$99.99</span>
                                            <Link
                                                to={`/preview-course/${data._id}`}
                                                className="btn btn-sm text-white px-3 border-0"
                                                style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)' }}
                                            >
                                                Enroll Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage