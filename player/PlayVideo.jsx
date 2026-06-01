import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

const PlayVideo = ({ videoId }) => {
    const containerRef = useRef(null);
    const playerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        // 1. Clear container to prevent duplicate players in React Strict Mode
        containerRef.current.innerHTML = '';

        // 2. Initialize using the URL
        // We construct the URL inside the component for cleanliness
        const videoUrl = `https://vimeo.com/${videoId}`;

        playerRef.current = new Player(containerRef.current, {
            url: videoUrl,
            responsive: true,
            width: 640,
            dnt: true, // "Do Not Track" - helps with some privacy/ad-block issues
        });

        // 3. Listen for the 'loaded' event to update UI
        playerRef.current.on('loaded', () => {
            setIsLoaded(true);
            console.log('Vimeo Player Loaded Successfully');
        });

        // 4. Error Handling
        playerRef.current.on('error', (error) => {
            console.error("Vimeo Error:", error.name);
            if (error.name === 'PrivacyError') {
                alert("Privacy Error: Please whitelist this domain in Vimeo settings.");
            }
        });

        // 5. Cleanup on Unmount
        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [videoId]);

    return (
        <div style={{ position: 'relative', width: '100%', backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden' }}>
            {/* Loading Spinner / Placeholder */}
            {!isLoaded && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    zIndex: 1
                }}>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading Video...</span>
                    </div>
                </div>
            )}
            
            {/* The Actual Video Container */}
            <div ref={containerRef} style={{ minHeight: '360px' }}></div>
        </div>
    );
};

export default PlayVideo;