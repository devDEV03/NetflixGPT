import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcoming from '../hooks/useUpcoming';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcoming();

  return (
    <div className=''>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse