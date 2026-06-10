import React, { use, useState } from "react";
import Navbar from '../component/Navbar'
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContent } from "../context/AppContext";
import Footer from "./Footer";
import Header from "./Header";
import CancelPayment from "../payment/CancelPayment";
import SuccessPayment from "../payment/SuccessPayment";
import { toast } from "react-toastify";

function Preview() {
    const { _id } = useParams()
    const [courses, setCourses] = useState([])
    const { backendUrl, userData } = useContext(AppContent)
    const [userID, setUserID] = useState("")


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

    const handleCheckout = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/course/checkout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Pass the dynamic data here
                body: JSON.stringify({
                    name: courses?.title, // You can use variables from state/params here
                    amount: 50, // Amount in Dollars
                    courseId: _id, // Pass the course ID for backend processing
                    userId: userID // Pass the user ID
                }),
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            }
            if (data.success) {
                toast.error(data.message || "You are already enrolled in this course.");
            }
        } catch (error) {
            console.error("Checkout error:", error);
        }
    }

    // useEffect(() => {
    //     allCourse()
    //     console.log(courses)
    // }, [courses]);

    useEffect(() => {
        allCourse();
        console.log(courses)
        setUserID(userData._id)
    }, [_id, userData]); // Add userData to dependencies if you want to refetch when userData changes
    return (
        <div>
            <Header />

            <div className="container py-4">
                <div className="row g-4">

                    <div className="col-12 col-lg-8">

                        <div className="mb-5">
                            <h1 className="display-5 fw-bold text-dark">{courses?.title}</h1>
                            <p className="lead text-muted">{courses?.description}</p>
                        </div>

                        <div className="mt-4">
                            <h2 className="h4 fw-bold mb-4">Course content</h2>

                            <div className="accordion accordion-flush border rounded shadow-sm" id="courseAccordion">
                                {courses?.modules?.length > 0 ? (
                                    courses.modules.map((check, index) => (
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
                                                    <span className="text-primary me-2">Module {index + 1}:</span> {check.topic}
                                                </button>
                                            </h2>

                                            <div
                                                id={"collapse" + index}
                                                className="accordion-collapse collapse"
                                                aria-labelledby={"heading" + index}
                                                data-bs-parent="#courseAccordion"
                                            >
                                                <div className="accordion-body bg-light">
                                                    <div className="card border-0 shadow-sm overflow-hidden">
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-4 col-sm-3 col-md-2">
                                                                <img
                                                                    src={check?.videos?.[0]?.pictureThumbnail || ""}
                                                                    className="img-fluid rounded-start w-100"
                                                                    alt="lesson"
                                                                    style={{ objectFit: 'cover', height: '80px' }}
                                                                />
                                                            </div>
                                                            <div className="col-8 col-sm-9 col-md-10">
                                                                <div className="card-body py-2">
                                                                    <h5 className="card-title h6 mb-1">Lesson: {check.topic}</h5>
                                                                    <p className="card-text small text-muted mb-0">
                                                                        <i className="bi bi-file-earmark-pdf text-danger me-1"></i>
                                                                        Download Resources file
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-5 text-center bg-light rounded">
                                        <h5 className="text-muted">No modules available yet.</h5>
                                        <p className="small text-secondary mb-0">When you create modules for this course, they will appear here.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="card shadow-sm sticky-lg-top" style={{ top: '20px' }}>
                            <img
                                className="card-img-top"
                                src={courses?.pictureThumbnail}
                                alt="Course Preview"
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-bold mb-3">This course includes</h5>
                                <ul className="list-unstyled d-grid gap-2 mb-4">
                                    <li className="small d-flex align-items-center">
                                        <i className="bi bi-play-circle-fill text-primary me-2"></i> 12 Hours on-demand video
                                    </li>
                                    <li className="small d-flex align-items-center">
                                        <i className="bi bi-cloud-arrow-down-fill text-primary me-2"></i> 5 downloadable resources
                                    </li>
                                    <li className="small d-flex align-items-center">
                                        <i className="bi bi-infinity text-primary me-2"></i> Full lifetime access
                                    </li>
                                    <li className="small d-flex align-items-center">
                                        <i className="bi bi-phone-fill text-primary me-2"></i> Access on mobile and TV
                                    </li>
                                </ul>
                                {courses?.modules?.length > 0 ? (
                                    <button className="btn btn-primary w-100 fw-bold py-2" onClick={handleCheckout}>Enroll Now</button>
                                ) : (
                                    <button type="button" class="btn btn-primary" disabled>
                                        Enroll Now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Preview;