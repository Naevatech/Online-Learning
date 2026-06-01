import React, { useState } from "react";
import Navbar from '../component/Navbar'
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContent } from "../context/AppContext";

function CourseDetails() {
    const { _id } = useParams()
    const [courses, setCourses] = useState(null)
    const { backendUrl } = useContext(AppContent)


    const allCourse = async () => {
        try {
            const res = await fetch(backendUrl + "/api/course/mycourse/" + _id)
            const json = await res.json()

            console.log("API:", json)

            if (json.success) {
                setCourses(json.course)
            }

        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     allCourse()
    //     console.log(courses)
    // }, [courses]);

    useEffect(() => {
        allCourse();
        console.log(courses)
    }, [_id]);

    return (
        <div> 
            <Navbar >
        <div className="container py-5">
            <div className="row g-4">

                <div className="col-12 col-lg-8">
                    <div className="mb-4">
                        <h1 className="display-5 fw-bold text-dark">{courses?.title}</h1>
                        <p className="lead text-muted">{courses?.description}</p>
                    </div>

                    <div className="mt-5">
                        <h2 className="h4 fw-bold mb-4">Course Content</h2>

                        <div className="accordion accordion-flush border rounded shadow-sm" id="accordionFlushExample">
                            {/* Mapping through modules */}
                            {courses?.modules?.map((module, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={"heading" + index}>
                                        <button
                                            className="accordion-button collapsed fw-medium"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={"#collapse" + index}
                                            aria-expanded="false"
                                            aria-controls={"collapse" + index}
                                        >
                                            <span className="text-primary me-2">Module {index + 1}:</span> {module.topic}
                                        </button>
                                    </h2>

                                    <div
                                        id={"collapse" + index}
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body bg-light">
                                            <div className="card border-0 shadow-sm overflow-hidden">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-4 col-md-3">
                                                        <img
                                                            src={module?.videos?.[0]?.pictureThumbnail || "placeholder.jpg"}
                                                            className="img-fluid rounded-start"
                                                            alt="Lesson"
                                                            style={{ objectFit: 'cover', height: '100px', width: '100%' }}
                                                        />
                                                    </div>
                                                    <div className="col-8 col-md-9">
                                                        <div className="card-body py-2">
                                                            <h5 className="card-title h6 mb-1">Lesson: {module.topic}</h5>
                                                            <p className="card-text mb-0">
                                                                <a href="#" className="text-decoration-none small text-danger">
                                                                    <i className="bi bi-file-pdf me-1"></i>Download Resources
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="card shadow-sm sticky-lg-top" style={{ top: '20px' }}>
                        <img
                            className="card-img-top"
                            src="/side-view-singer-working-studio.jpg"
                            alt="Course Preview"
                        />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">This course includes:</h5>
                            <ul className="list-unstyled d-grid gap-2 my-3">
                                <li className="small text-muted"><i className="bi bi-play-circle me-2 text-primary"></i>12 Hours on-demand video</li>
                                <li className="small text-muted"><i className="bi bi-cloud-download me-2 text-primary"></i>5 downloadable resources</li>
                                <li className="small text-muted"><i className="bi bi-infinity me-2 text-primary"></i>Full lifetime access</li>
                                <li className="small text-muted"><i className="bi bi-phone me-2 text-primary"></i>Access on mobile and TV</li>
                            </ul>
                            <button className="btn btn-primary w-100 fw-bold py-2">Enroll Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Navbar>
    </div>
    )

}

export default CourseDetails;