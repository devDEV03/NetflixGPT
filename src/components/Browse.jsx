import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcoming from '../hooks/useUpcoming';
import useTopRated from '../hooks/useTopRated';
import useAiringTodayTv from '../hooks/useAiringTodayTv';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {

  const gptView  = useSelector((store) => store.gpt.gptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcoming();
  useTopRated();
  useAiringTodayTv();
  return (
    <div className='overflow-scroll no-scrollbar w-full'>
      <Header />
      { gptView ? (
        <GptSearch />
      ) : (
        <>
      <MainContainer />
      <SecondaryContainer />
        </>
      )
      }
    </div>
  )
}

export default Browse