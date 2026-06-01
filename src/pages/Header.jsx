import React, { useContext } from 'react';
import { AppContent } from '../context/AppContext';
import { Link } from 'react-router-dom'; // Using Link is better for SPA navigation
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { backendUrl, userData, logUserOut, setisLoggedin } = useContext(AppContent);
    const navigate = useNavigate();
    const logUserOut1 = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(
                backendUrl + '/api/auth/logout'
            )

            if (data.success) {
                setisLoggedin(false)
                logUserOut()
                navigate("/homepage")
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom py-2 shadow-sm">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand d-flex align-items-center gap-2" href="/">
                    <div
                        className="d-flex align-items-center justify-content-center rounded"
                        style={{
                            width: "40px",
                            height: "40px",
                            background: "linear-gradient(to bottom right, #2563eb, #9333ea)"
                        }}
                    >
                        <span className="text-white fw-bold fs-5">E</span>
                    </div>
                    <span className="fw-bold text-dark">EduLearn</span>
                </a>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Center Navigation Links */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#categories">Categories</a>
                        </li>
                        <li className="nav-item">
                            <Link to={"/courseview"}><a className="nav-link text-dark" href="#courses">  Courses</a></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#testimonials">Testimonials</a>
                        </li>
                    </ul>

                    {/* Right Side Actions */}
                    <div className="d-flex align-items-center gap-3">
                        {userData?._id ? (
                            <>
                                <button
                                    className="btn btn-link text-decoration-none text-muted p-0"
                                    onClick={logUserOut1}
                                >
                                    Logout
                                </button>
                                <span className="badge bg-light text-dark border p-2 fw-medium">
                                    Hi, {userData.name}
                                </span>
                            </>
                        ) : (
                            <>
                                <a href="/login" className="btn btn-link text-decoration-none text-dark p-0">
                                    Sign In
                                </a>
                                <button className="btn btn-primary btn-sm px-4">
                                    Get Started
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;