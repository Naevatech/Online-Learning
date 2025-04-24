import React from 'react'

function Loginuser() {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(166, 0, 0)", height: "20px" }}>

                    </div>

                    <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(0, 0, 0)", }}>
                        <div className="mx-auto" style={{ width: "250px", border: "1px solid rgb(0, 0, 0)" }}>
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
                    </div>

                    <div className='col-md-4 col-sm-6' style={{ border: "1px solid rgb(166, 0, 0)", height: "20px" }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginuser