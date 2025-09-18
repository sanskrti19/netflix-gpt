import React, { useState, useEffect } from 'react';
import { IMG_CDN_URL } from "../utils/constant";
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const MovieCard = ({ movieId, posterPath }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // CORRECT: Call the hook unconditionally at the top level
  useMovieTrailer(movieId); 

  // Get the trailer video from the Redux store
  const trailerVideo = useSelector(store => store.movies.trailerVideo);

  if (!posterPath) return null;

  return (
    <div 
      className="relative w-48 pr-4 group"
       
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      <img
        alt="movie poster"
        src={IMG_CDN_URL + posterPath}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      
      
      {isHovered && trailerVideo && (
        <div className="absolute inset-0 z-10">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0`}
            title="Movie trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieCard;