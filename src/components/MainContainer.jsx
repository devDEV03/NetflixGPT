import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    // For early return
    if(movies === null) return;
    const {id ,original_title, overview}  = movies[3];
    
    

  return (
    <div className=' pt-[5%] bg-black md:pt-0 md:bg-none'>
        <VideoTitle title ={original_title} overview={overview}/>
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer