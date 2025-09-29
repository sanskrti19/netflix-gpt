import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {
   const {movieResults,movieNames}=useSelector((store)=>store.gpt);
  if(!movieNames)return null;
  if(!movieResults)return null;
   return  <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
    <div>
       
     {movieNames.map((movieNames)=> (
      <MovieList 
      key={movieNames}
      title={movieNames}
       movies={movieResults[0]}
       />
     ))}

      </div>
    </div>
  
}

export default GptMovieSuggestion
