import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const dispatch = useDispatch();

    useEffect(() => {
       !popularMovies && getPopularMovies();
    },[])

    async function getPopularMovies(){
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results))
    }
}

export default usePopularMovies;
