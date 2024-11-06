import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageconstants';
import { model, generationConfig } from '../utils/gemini';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovies } from '../utils/gptSlice';
import useGptSearchMovies from '../hooks/useGptSearchMovies';

const GptSearchBar = () => {

    const gptLanguage = useSelector((store) => store.config.preferredLanguage);
    const dispatch = useDispatch();

    // useRef over useState because it persist across re renders and the changing the state variables causes re rendering which wont be done while using useRef
    const searchText = useRef(null);
    // const searchMovies = useGptSearchMovies(searchText?.current?.value);

    // const handleSearch = () => {
    //     searchMovies();
    // }

    const handleSearchMovies = async (movieName) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}`,API_OPTIONS);
        const json = await data.json();
        return json?.results;
    }
    
    const handleSearchText = async () => {
    
        // I have imported the model and generationConfig from gemini.js which i use to call the gemini api to get the movie recommendation
        const chatSession = model.startChat({
            generationConfig,
            history: [
            ],
          });
    
    
        //   The prompt is the important part as the more verbose and defined it is the result will be more accurate,we have to keep in check the little detailings too
          const prompt = "Act as a Movie Recommendation System and suggest me some movies based on this query : "
           + searchText.current.value + ". only give me names of 5 movies (it should not have their year of release mentioned), comma seperated like the example given ahead. Example Result :- Interstellar, Schindler's List, Forrest Gump, Whiplash, The Social Network";
        
          const result = await chatSession.sendMessage(prompt);
          const movieArrayNames = result.response.text().split(",");
    
          const promptArray = movieArrayNames.map(
            (movie) => handleSearchMovies(movie)
          );
    
        //   As the map function works fast and would give back the result of handleSearchMovies promise object  unresolved so we use Promise.all to resolve all the promises and store it in the result array
          const resultArray = await Promise.all(promptArray);
          dispatch(addGptMovies({movieNames : movieArrayNames , movieResults : resultArray}));
          
    }

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
