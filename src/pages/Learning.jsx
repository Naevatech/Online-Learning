import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './footer'
import { AppContent } from '../context/AppContext'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import PlayVideo from '../../player/PlayVideo'


function Learning() {
    const { _id } = useParams()
    const [videourl, setVideoUrl] = useState("")
    const { backendUrl, userData } = useContext(AppContent)
    // 1. If 'courses' is actually a list of modules, rename it to 'modules' for clarity
    const [modules, setModules] = useState([]);

    const startCourse = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/user/startLearning/${_id}`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            });

            const json = await response.json();
            console.log("API Response:", json);

            if (json.success && json.course.modules) {
                // 2. Set the state to the array inside the object
                setModules(json.course.modules);
            }
        } catch (error) {
            console.log("Fetch Error:", error);
        }
    };

    // 3. THIS MUST CALL THE FUNCTION
    useEffect(() => {
        if (_id) {
            startCourse();
        }
    }, [_id]);

    // Separate useEffect to log when state changes
    useEffect(() => {
        console.log("Modules state updated:", modules);
        console.log("Video URL state updated:", videourl);
    }, [modules, videourl]);

    return (
        <div>
            <Header />
            <section className='container py-5 mt-5'>
                <div className='container row'>
                    <div className="col-8">
                        <div className="container ">
                            <div>
                                {/* col-lg-9 keeps the video at a readable size on desktops */}
                                <div>
                                    <PlayVideo videoId={videourl} />

                                    <div className="mt-4">
                                        <h4>About this lesson</h4>
                                        <p className="text-muted">
                                            Even if the source video is portrait, it will now stay contained
                                            within this landscape player.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">

                        <div class="accordion accordion-flush border rounded" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Course Highlihght
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div>
                                            <ul className="list-group list-group-horizontal-xxl">
                                                {modules.map((mod, index) => (
                                                    <li onClick={() => setVideoUrl(mod.videos[0].url)} className=" cursor-pointer list-group-item border border-gray rounded" key={index}> <i className="bi bi-play-circle-fill mx-2"></i> {mod.topic}, {mod.videos[0].url}</li>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Learning