import React from 'react'
import { Link } from 'react-router-dom'


function CancelPayment() {
    return (
        <div>
            <div>
                <button className="btn btn-primary w-100 fw-bold py-2" onClick={handleCheckout}><Link to="/">Go home</Link></button>

            </div>
        </div>


    )
}

export default CancelPayment