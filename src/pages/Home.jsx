import React, { useContext, useEffect, useState } from 'react'
import { AppContent } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'

function Home() {
  const { userData, setuserData, backendUrl } = useContext(AppContent)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [checkCourse, setcheckCourse] = useState([])
  const [picDisplay, setpicDisplay] = useState([])
  const [videoDisplay, setvideoDisplay] = useState("")

  const allCourse = async (e) => {
    // e.preventDefault()
    // axios.defaults.withCredentials = true
    try {
      // const {data} = await axios.get("http://localhost:4000/api/course/allCourse")
      // console.log(data)
      // if (data.success) {
      //     setCourses(data.course)
      // }
      await fetch(backendUrl + "/api/course/allCourse")
        .then(res => res.json())
        .then(json => setCourses(json.course))
      // console.log(courses[0].title)
      for (let index = 0; index < courses.length; index++) {
        console.log(courses[index].modules)
        setcheckCourse(courses[index].modules)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const watchVideo = (videoDisplay) => {
    // setpicDisplay(picDisplay)
    setvideoDisplay(videoDisplay)
    // console.log(videoDisplay)
  }

  useEffect(() => {
    allCourse()
  }, [])



  return (

    <div>

      {/* <div className='container'>
        <div className="row">
          {
            userData ? userData.name[0] : navigate("/login")
          }
        </div> */}

      {/* </div> */}

      {/* design start here */}
        <div className="container">
          <div className="col-md-6" style={{border:"2px solid red", height:"300px"}}>
          <ReactPlayer url={videoDisplay} light="https://res.cloudinary.com/upload-xyz/image/upload/v1746132694/t089eqrc1tchir47mxwf.jpg"></ReactPlayer>
          </div>
        </div>


      <div className="d-flex gap-2 col" style={{ flexWrap: "wrap" }}>
        {
          checkCourse ? checkCourse.map((data, index) => (
            <div className='container'>
              <div className='col-md-3 col-sm-6 col-12 p-1' style={{ border: "1px solid  rgb(220, 220, 220)", borderRadius: "10px" }}>
                <img src={data.videos[0].pictureThumbnail} className='mb-3' alt="" srcset="" style={{ width: "315px", borderRadius: "10px", justifyContent: "center" }} />
                <h1 className='fs-5'>{data.topic}</h1>
                <h1>{data.videos[0].url}</h1>
                <div className="d-flex" >
                  <button className='btn btn-outline-primary btn-sm' onClick={() => watchVideo(data.videos[0].url)}>Watch Now</button>
                </div>
              </div>
            </div>
          ))
            :
            <h1>No courses yet</h1>
        }
      </div>
    </div>


  )
}

export default Home



