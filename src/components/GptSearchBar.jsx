import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageconstants';

const GptSearchBar = () => {

    const gptLanguage = useSelector((store) => store.config.preferredLanguage);

    return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" className='bg-black p-4 w-1/2 grid grid-cols-12 rounded-lg '>
    <input type="text" placeholder={lang[gptLanguage]?.InputPlaceholder} className='p-3 col-span-9' />
      <button className='bg-red-600 text-white p-3 mx-3 rounded-md col-span-3'>{lang[gptLanguage]?.Search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
