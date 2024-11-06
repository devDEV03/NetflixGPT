import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageconstants';
import useGptSearchMovies from '../hooks/useGptSearchMovies';

const GptSearchBar = () => {

    const gptLanguage = useSelector((store) => store.config.preferredLanguage);
    
    // useRef over useState because it persist across re renders and the changing the state variables causes re rendering which wont be done while using useRef
    const searchText = useRef(null);
    const handleSearchText = useGptSearchMovies(searchText);
 

    return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" className='bg-black p-4 w-1/2 grid grid-cols-12 rounded-lg' onSubmit={(e) => e.preventDefault()}>
    <input type="text" placeholder={lang[gptLanguage]?.InputPlaceholder} className='p-3 col-span-9' ref={searchText}/>
      <button className='bg-red-600 text-white p-3 mx-3 rounded-md col-span-3' onClick={handleSearchText}>{lang[gptLanguage]?.Search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
