import React, { useEffect } from 'react'
import { model, generationConfig } from '../utils/gemini';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMovies } from '../utils/gptSlice';

const useGptSearchMovies = (searchText) => {
    const dispatch = useDispatch();

  useEffect(() => {
        handleSearchText();
  },[])

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
       + searchText + ". only give me names of 5 movies (it should not have their year of release mentioned), comma seperated like the example given ahead. Example Result :- Interstellar, Schindler's List, Forrest Gump, Whiplash, The Social Network";
    
      const result = await chatSession.sendMessage(prompt);
      const movieArrayNames = result.response.text().split(",");

      const promptArray = movieArrayNames.map(
        (movie) => handleSearchMovies(movie)
      );

    //   As the map function works fast and would give back the result of handleSearchMovies promise object  unresolved so we use Promise.all to resolve all the promises and store it in the result array
      const resultArray = await Promise.all(promptArray);
      dispatch(addGptMovies({movieNames : movieArrayNames , movieResults : resultArray}));
      
}
}

export default useGptSearchMovies;