import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LOGIN_BACKGROUND, PHOTO_URL } from '../utils/constant';


const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10 fixed'>
        <img src= {LOGIN_BACKGROUND} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
