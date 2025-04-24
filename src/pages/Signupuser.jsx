import React, { useEffect, useState } from 'react'

function Signupuser() {

    const [gender, setgender] = useState("")
    const [fullname, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const onOption = (e) => {
        setgender(e.target.value) 
    }

    const register = () => {
    }

    
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(166, 0, 0)", height:"20px" }}>

                    </div>

                    <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(0, 0, 0)", }}>
                        <div className="mx-auto" style={{width: "250px", border: "1px solid rgb(0, 0, 0)"}}>
                            <h1>Sign up here</h1>
                        </div>
                        <div className="form-floating mb-3 mt-3">
                            <input type="Fullname" className="form-control" id="floatingInput" 
                                onChange={e => setfullname(e.target.value)} 
                                 />
                            <label for="floatingInput">Enter your Fullname</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail"
                                onChange={e => setemail(e.target.value)} 
                    
                            />
                            <label for="floatingEmail">Enter your Email Address</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="username" className="form-control" id="floatingUsername" 
                                onChange={e => setusername(e.target.value)} 
                                
                            />
                            <label for="floatingUsername">Enter your username</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" 
                                onChange={e => setpassword(e.target.value)} 
                                
                            />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="confirmpassword" className="form-control" id="floatingconfirmPassword" 
                                onChange={e => setconfirmPassword(e.target.value)} 
                                
                            />
                            <label for="floatingconfirmPassword">Re-enter password</label>
                        </div>

                        <div className='d-flex mb-3'>
                            <h6 className="mb-2 pb-1 ">Gender: </h6>

                            <div className="form-check form-check-inline mx-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                    onChange={onOption} 
                                    value="Male"
                                     />
                                <label className="form-check-label" for="maleGender">male</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                    onChange={onOption} 
                                    value="Female"
                                    />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>
                        </div>

                        <div className='d-grid gap-2 mx-auto'>
                            <button className='btn btn-outline-primary' onClick={register()}>Sign up</button>
                        </div>
                    </div>

                    <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(222, 149, 13)", height:"20px" }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signupuser