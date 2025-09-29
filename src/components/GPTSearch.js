import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import { BGIMG } from '../utils/constant';

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
      <img className='h-screen abject-cover' src= {BGIMG} alt="bg-img"/>  
      </div>              
    <div className="">
      <GptMovieSuggestion/>
      <GptSearchBar/>
    </div>
    </>
  )
};

export default GptSearch