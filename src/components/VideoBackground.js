import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';

const VideoBackground = ({ movieId }) => {
  const getMovieVideo = async () => {
    // FIX: Use template literals to insert the movieId
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData= json.results.filter((video) => video.type === "Trailer");
    const trailer=filterData[0];
    console.log(trailer)
    
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      vid bg
    </div>
  );
};

export default VideoBackground;