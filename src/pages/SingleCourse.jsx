import React from 'react'

function SingleCourse() {
    return (
        <div>
            <div className='container'>
                <div className="d-flex gap-2 col" style={{ flexWrap: "wrap" }}>
                    <div className='col-md-6 col-sm-6 col-12 p-1' style={{ border: "1px solid  rgb(220, 220, 220)", borderRadius: "10px" }}>
                        <img src="/af.jpg" className='mb-3' alt="" srcset="" style={{ width: "640px", borderRadius: "10px", justifyContent: "center" }} />
                        <h1 className='fs-5'>Beginners Guide to HTML</h1>
                        <p className='fs-6'>JavaScript is a powerful and dynamic language that is fundamental to modern web development and has expanded its reach far beyond the browser. It allows you to add interactivity, handle user actions, and create dynamic content on websites. As you begin your journey with JavaScript, you'll learn about its core concepts and how to use it to bring web pages to life and even build entire applications. Get ready to explore and have fun coding!</p>
                        <div className="d-flex" >
                            <button className='btn btn-outline-primary btn-sm'>Buy Course</button>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-6 col-12 p-3' style={{ border: "1px solid  rgb(220, 220, 220)", borderRadius: "10px" }}>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Course Content</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1. Introduction to programming</td>
                                    </tr>
                                    <tr>
                                        <td>2. Data types</td>
                                    </tr>
                                    <tr>
                                        <td>3. Function and Parameters</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleCourse