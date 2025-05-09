import React from 'react'
import Navbar from '../component/Navbar'
import '../styling/dashboard.css'
import Analytics from '../component/Analytics'


function StudentList() {
    return (
        <div>
            <Navbar>
            <Analytics />

                {/* student list */}

                <div style={{ padding: "40px", marginTop:"50px", backgroundColor: "white", borderRadius: "10px" }}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ margin: "0 0 20px 0" }}>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Navbar>
        </div>
    )
}

export default StudentList