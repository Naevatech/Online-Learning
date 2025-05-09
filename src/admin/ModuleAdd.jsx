import React from 'react'
import Navbar from '../component/Navbar'
import { useState } from 'react'
import '../styling/dashboard.css'


function ModuleAdd() {
    const [formStep, setformStep] = useState(0)
    const completeFormStep = () => {
        setformStep((prev) => prev + 1)
    }

    const renderButton = () => {
        if (formStep > 2) {
            return undefined
        } else if (formStep === 1) {
            return 
        } else {
            return <button className='btn btn-outline-primary btn-lg' type="button" onClick={completeFormStep}>Next</button>
        }
    }

    return (
        <div>
            <Navbar>
                <div className='create-course'>
                    <div className='create-course-form'>
                        <div>
                            <form >
                                {/* step one */}
                                {/* {first === 0 && (
                                    
                                )} */}
                                {formStep === 0 && (
                                    <section>
                                        <div className="mx-auto" style={{ marginBottom: "50px" }}>
                                            <h1 style={{ textAlign: "center" }}>Provide the content for your course </h1>
                                            <p style={{ textAlign: "center" }}>We will use this information to customize your created course, you can change it any time</p>
                                        </div>
                                        <div className="form-floating mb-3 mt-3">
                                            <input type="title" className="form-control" id="floatingInput"
                                                onChange={e => setfullname(e.target.value)}
                                            />
                                            <label for="floatingInput">Module title</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <textarea type="text" style={{ height: "50px" }} className="form-control" id="floatingTextarea"
                                                onChange={e => setemail(e.target.value)}></textarea>
                                            <label for="floatingTextarea">Video module url</label>
                                        </div>

                                        <div className="form-floating mb-3 mt-3">
                                            <input type="title" className="form-control" id="floatingInput"
                                                onChange={e => setfullname(e.target.value)}
                                            />
                                            <label for="floatingInput">Asset download url</label>
                                        </div>
                                    </section>
                                )}

                                {/* step 2 */}
                                {
                                    formStep === 1 && (
                                        <section className='mt-5'>
                                            <div className="form-floating mb-3 " style={{ display: "flex", justifyContent: "center" }}>
                                                <img src="../public/success.png" alt="" srcset="" width={"60px"} />
                                            </div>

                                            <div className="form-floating mb-3 px-5">
                                                <h2 style={{ textAlign: "center" }}>Module Created successfully.</h2>
                                                <p style={{ textAlign: "center" }}>You can add more modules to your selected course or return to your course page section</p>
                                            </div>

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <button className='btn-module' type="button" >Back to course</button>
                                                <button className='btn-module' type="button" >Add new</button>
                                            </div>
                                        </section>
                                    )
                                }

                                <div className='d-grid gap-2 mx-auto'>
                                    {renderButton()}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default ModuleAdd