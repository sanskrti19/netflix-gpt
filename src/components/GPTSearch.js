import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import { BGIMG } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
                <img
                src= {BGIMG}
                alt="bg-img"
                />
        </div>

      <GptMovieSuggestion/>
      <GptSearchBar/>
    </div>
  )
};

export default GptSearch