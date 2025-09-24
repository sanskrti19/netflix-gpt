 
import React, { useState } from 'react';
import useMovieTrailer from '../hooks/UseMovieTrailer';
const MovieCardWithHover = ({ movieId, posterPath }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailerVideo = useMovieTrailer(movieId, isHovered); // Pass isHovered to your hook

  return (
    <div 
      className="relative w-48 h-64 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      
  
      {isHovered && trailerVideo && (
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      )}
    </div>
  );
};