import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AppContent } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import { Atom, Riple } from 'react-loading-indicators'
import '../styling/loading.css'
import { toast } from 'react-toastify'


function Loginuser() {
    const { backendUrl, setisLoggedin, getUserData } = useContext(AppContent)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            setloading(true)
            // axios.defaults.withCredentials = true
            const { data } = await axios.post(backendUrl + '/api/auth/login', { email, password })
            if (data.success) {
                setisLoggedin(true)
                getUserData()
                navigate("/")
            } else {
                toast.error("Incorrect email or password")
                // navigate("/login")
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }

    }

    return (
        <div className="min-vh-100 d-flex align-items-center bg-light">
            {/* Loading Overlay */}
            {loading && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
                    <Riple
                        color="#6d1f9b"
                        size="medium"
                        text="Loading"
                        textColor="#ffffff"
                    />
                </div>
            )}

            <div className="container">
                <div className="row justify-content-center">
                    {/* Login Card - Responsive Widths */}
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                        <div className="card shadow-sm border-0 px-3 py-4">
                            <div className="card-body">

                                {/* Header */}
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold text-dark">Login here</h2>
                                    <p className="text-muted small">Please enter your credentials to continue</p>
                                </div>

                                <form onSubmit={handleLogin}>
                                    {/* Email Input */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            onChange={e => setemail(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>

                                    {/* Password Input */}
                                    <div className="form-floating mb-4">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            onChange={e => setpassword(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="d-grid gap-2">
                                        <button
                                            className="btn btn-primary py-2 fw-bold"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? "Authenticating..." : "Login"}
                                        </button>
                                    </div>
                                </form>

                                {/* Optional Footer Link */}
                                <div className="text-center mt-4">
                                    <p className="small text-muted mb-0">
                                        Don't have an account? <a href="#" className="text-decoration-none text-primary fw-medium" ><Link to={"/signup"}>Sign up</Link></a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginuser