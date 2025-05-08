import React, { useState } from 'react'
import HeaderList from '../component/HeaderList'


function Signup() {
    const [name, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    return (
        <div className=''>
            <HeaderList />
            <form >
                <div className='container admin-signup-1'  >
                    <div className="row">
                        <div className='col-md-4 col-sm-6'>

                        </div>

                        <div className='col-md-4 col-sm-6 signup-box'>
                            <div className="mx-auto" style={{marginBottom:"50px"}}>
                                <h1 style={{textAlign:"center"}}>Join the tribe</h1>
                                <p style={{textAlign:"center"}}>Are you read to take the next step towards a successful future? Look no further than Qwdrant!</p>
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
                                <input type="password" className="form-control" id="floatingPassword"
                                    onChange={e => setpassword(e.target.value)}

                                />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingconfirmPassword"
                                    onChange={e => setconfirmPassword(e.target.value)}

                                />
                                <label for="floatingconfirmPassword">Re-enter password</label>
                            </div>

                            <div className='d-grid gap-2 mx-auto'>
                                <button className='btn btn-outline-primary btn-lg' type="submit">Sign up</button>
                            </div>
                        </div>

                        <div className='col-md-4 col-sm-6 btn-lg'>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup