import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcoming = () => {

const dispatch = useDispatch();
const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  },[])

  async function getUpcomingMovies(){
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addUpcomingMovies(json?.results));
    
  }
}

export default useUpcoming
