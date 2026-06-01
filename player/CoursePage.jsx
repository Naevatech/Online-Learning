import PlayVideo from "./PlayVideo";
import React from "react";

function CoursePage() {

    const vimeoId = "1180818979";

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {/* col-lg-9 keeps the video at a readable size on desktops */}
                <div className="col-12 col-lg-9">
                    <h2 className="mb-4">Course Video</h2>
                    <PlayVideo videoId={vimeoId} />
                    
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
    );
}
export default CoursePage