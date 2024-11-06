import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRated = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);


    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    },[])

    async function getTopRatedMovies(){
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addTopRatedMovies(json?.results));
    }
}

export default useTopRated
