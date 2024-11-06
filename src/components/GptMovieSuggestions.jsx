import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector((store) => store.gpt);

  if(!movieNames) return null;
 
  return (
    movieNames && 
    <div className='bg-black bg-opacity-65 p-4 m-3 text-white h-[600px] overflow-y-scroll no-scrollbar'>
        {
          movieNames.map((movie,index) => (
            <MovieList key={movie} title={movie} movies={movieResults[index]}/>
          ))
        }
    </div>
  )
}

export default GptMovieSuggestions
