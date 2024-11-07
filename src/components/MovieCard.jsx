import React from 'react'
import { MOVIE_CARD_IMG } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return;
    
  return (
    <div className='cursor-pointer w-32 md:w-48 pr-4 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125  duration-300'>
        <img src={MOVIE_CARD_IMG + posterPath} alt='movie-card'/>
    </div>
  )
}

export default MovieCard