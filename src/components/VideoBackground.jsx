import React from 'react'
import { YOUTUBE_VIDEO } from '../utils/constant'
import {useSelector } from 'react-redux'
import useTrailer from '../hooks/useTrailer';

const VideoBackground = ({ movieId }) => {

    useTrailer(movieId);
    const trailerKey = useSelector((store) => store.movies.trailerKey)
   
    return (
        <div className='w-screen -mt-28'>
            <iframe className='w-screen aspect-video ' src= {YOUTUBE_VIDEO + trailerKey + "?&autoplay=1&mute=1" }
             title="YouTube video player"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground