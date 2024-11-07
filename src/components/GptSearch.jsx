import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LOGIN_BACKGROUND, PHOTO_URL } from '../utils/constant';


const GptSearch = () => {
  return (
  <>
    <div className='absolute -z-10 '>
        <img className='h-screen md:w-screen md:h-full object-cover' src= {LOGIN_BACKGROUND} alt="bg" />
      </div>
    <div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  )
}

export default GptSearch
