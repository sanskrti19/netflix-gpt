import React from 'react';
 
//import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
 import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';


const Browse = () => {
  useNowPlayingMovies();

 
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      <h1 className="text-black text-3xl">Welcome to the Browse Page</h1>
    </div>
  );
};

export default Browse;
