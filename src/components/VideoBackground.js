// VideoBackground.js
import React from 'react';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
    // Get the trailer video for the specific movie ID from the Redux store.
    const trailerVideo = useSelector(store => store.movies.trailerVideos[movieId]);

    // Safety check: if no trailer is found, render nothing.
    if (!trailerVideo) return null; 

    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoBackground;