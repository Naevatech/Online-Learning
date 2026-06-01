import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import { toast } from 'react-toastify'


function Signupuser() {
    const navigate = useNavigate()
    const { backendUrl, setisLoggedin, getUserData } = useContext(AppContent)

    const [gender, setgender] = useState("")
    const [name, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")



    const onOption = (e) => {
        setgender(e.target.value)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            axios.defaults.withCredentials = true
            if (password === confirmPassword) {
                // alert("Incorrect password or email")
                const { data } = await axios.post(backendUrl + '/api/auth/register', { name, email, username, gender, password })
                if (data.success) {
                    setisLoggedin(true)
                    getUserData()
                    navigate("/login")
                    toast.success("Successfully registered")
                } else if (!data.message) {
                    navigate("/signup")
                    toast.error("Your password or email is incorrect")
                }
                else {
                    toast.error(data.message)
                }
                console.log(data)
            }
            else {
                toast.error("Incorrect password")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            {/* Using a standard Bootstrap container-fluid or container */}
            <div className='container min-vh-100 d-flex align-items-center justify-content-center py-5'>
                <form onSubmit={handleSubmit} className="w-100">
                    <div className="row justify-content-center">
                        {/* col-11: small mobile
                    col-sm-8: tablets
                    col-md-6: small laptops
                    col-lg-4: desktops 
                */}
                        <div className='col-11 col-sm-8 col-md-6 col-lg-4 shadow-sm p-4 rounded border'>

                            <div className="text-center mb-4">
                                <h1 className="h3 fw-bold">Sign up here</h1>
                                <p className="text-muted">Create your account to get started</p>
                            </div>

                            {/* Full Name */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="John Doe"
                                    onChange={e => setfullname(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Full Name</label>
                            </div>

                            {/* Email */}
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
                                    onChange={e => setemail(e.target.value)}
                                />
                                <label htmlFor="floatingEmail">Email Address</label>
                            </div>

                            {/* Username */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingUsername" placeholder="username"
                                    onChange={e => setusername(e.target.value)}
                                />
                                <label htmlFor="floatingUsername">Username</label>
                            </div>

                            {/* Password */}
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    onChange={e => setpassword(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            {/* Confirm Password */}
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingconfirmPassword" placeholder="Confirm Password"
                                    onChange={e => setconfirmPassword(e.target.value)}
                                />
                                <label htmlFor="floatingconfirmPassword">Re-enter password</label>
                            </div>

                            {/* Gender Selection */}
                            <div className='mb-4'>
                                <label className="form-label d-block text-muted small fw-bold">GENDER</label>
                                <div className="d-flex gap-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                            onChange={onOption}
                                            value="Male"
                                        />
                                        <label className="form-check-label" htmlFor="maleGender">Male</label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                            onChange={onOption}
                                            value="Female"
                                        />
                                        <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className='d-grid'>
                                <button className='btn btn-primary btn-lg' type="submit">Sign up</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signupuser