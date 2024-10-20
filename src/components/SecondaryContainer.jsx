import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
  console.log(movies);
  
  return (
    <div className='bg-black'>
      <div className='relative -mt-56 z-20'>
      <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Movies in India"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer