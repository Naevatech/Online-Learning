import React from 'react'
import '../styling/headerlist.css'

function HeaderList() {
    return (
        <div className='header'>
            <div className='header-list'>
                <div>
                    <img src="./public/qwdrant.png" style={{
                        width: "140px",
                        margin: "20px",
                        color:"red"
                    }} alt="" srcset="" />
                </div>
                <div>
                    <h5>Login</h5>
                </div>

            </div>
        </div>
    )
}

export default HeaderList