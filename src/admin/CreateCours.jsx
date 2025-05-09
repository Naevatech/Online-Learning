import React from 'react'
import Navbar from '../component/Navbar'
import { useState } from 'react'
import '../styling/dashboard.css'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

function CreateCours() {
    const [formStep, setformStep] = useState(0)
    const completeFormStep = () => {
        setformStep((prev) => prev + 1)
    }

    const renderButton = () => {
        if (formStep > 2) {
            return undefined
        } else if (formStep === 2) {
            return <button className='btn btn-outline-primary btn-lg' type="button" onClick={createCourse}>Submit</button>
        } else {
            return <button className='btn btn-outline-primary btn-lg' type="button" onClick={completeFormStep}>Next</button>
        }
    }

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };


    const [first, setfirst] = useState(0)
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
                                <div className="mx-auto" style={{ marginBottom: "50px" }}>
                                    <h1 style={{ textAlign: "center" }}>Let get you started!</h1>
                                    <p style={{ textAlign: "center" }}>We will use this information to customize your created course, you can change it any time</p>
                                </div>
                                {formStep === 0 && (
                                    <section>
                                        <div className="form-floating mb-3 mt-3">
                                            <input type="title" className="form-control" id="floatingInput"
                                                onChange={e => setfullname(e.target.value)}
                                            />
                                            <label for="floatingInput">Course Description</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <textarea type="text" style={{ height: "150px" }} className="form-control" id="floatingTextarea"
                                                onChange={e => setemail(e.target.value)}></textarea>
                                            <label for="floatingTextarea">Course Description</label>
                                        </div>
                                    </section>
                                )}

                                {/* step 2 */}
                                {
                                    formStep === 1 && (
                                        <section>
                                            <div className="form-floating mb-3">
                                                <input type="number" className="form-control" id="floatingTime"
                                                    onChange={e => setpassword(e.target.value)}
                                                />
                                                <label for="floatingTime">Hours of video content</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input type="number" className="form-control" id="floatingFiles"
                                                    onChange={e => setconfirmPassword(e.target.value)}
                                                />
                                                <label for="floatingFiles">Number of files</label>
                                            </div>

                                            <div>
                                                <Dragger {...props}>
                                                    <p className="ant-upload-drag-icon">
                                                        <InboxOutlined />
                                                    </p>
                                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                    <p className="ant-upload-hint">
                                                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                                        banned files.
                                                    </p>
                                                </Dragger>
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

export default CreateCours