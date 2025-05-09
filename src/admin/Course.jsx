import React from 'react'
import Navbar from '../component/Navbar'
import { useState } from 'react'

function Course() {
  return (
    <div>
        <Navbar>
            <div>
                <h1>Welcome to the Course</h1>
                <p>This is the main content inside the Navbar's children.</p>
            </div>
        </Navbar>
    </div>
  )
}

export default Course