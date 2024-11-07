import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    if(movies === null) return;
  return (
    <div className='p-3 md:p-4 '>
    <h1 className='font-bold text-lg md:text-3xl text-white p-5 pb-2'>{title}</h1>
    <div className='p-3 flex overflow-x-scroll no-scrollbar'>
        <div className='flex '>
            {
                movies.map((movie) => {
                    return <MovieCard key={movie.id} posterPath = {movie.poster_path} />
                })
            }
        </div>
    </div>
    </div>
  )
}

export default MovieList