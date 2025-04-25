import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AppContent } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'


function Loginuser() {
    const {backendUrl, setisLoggedin, getUserData} = useContext(AppContent)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = async(e) => {
        try {
            e.preventDefault()
            axios.defaults.withCredentials = true
            const {data}= await axios.post(backendUrl + '/api/auth/login', {email, password})
            if (data.success) {
                setisLoggedin(true)
                navigate("/")
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div>
            <form onSubmit={handleLogin}> 
                <div className='container' style={{ border: "1px solid rgb(166, 0, 0)", marginTop: "150px" }}>
                    <div className="row">
                        <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(166, 0, 0)", height: "20px" }}>
                        </div>

                        <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(0, 0, 0)", }}>

                            <div className="mx-auto" style={{ width: "250px", border: "1px solid rgb(0, 0, 0)" }}>
                                <h1>Login here</h1>
                            </div>

                            <div className="form-floating mb-3 mt-3">
                                <input type="email" className="form-control" id="floatingInput"
                                    onChange={e => setemail(e.target.value)}
                                />
                                <label for="floatingInput">Enter your Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingEmail"
                                    onChange={e => setpassword(e.target.value)}
                                />
                                <label for="floatingEmail">Enter your password</label>
                            </div>
                            <div className='d-grid gap-2 mx-auto'>
                                <button className='btn btn-outline-primary' type="submit">Login</button>
                            </div>

                        </div>

                        <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(166, 0, 0)", height: "20px" }}>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Loginuser