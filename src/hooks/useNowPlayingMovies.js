import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  },[])

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results))
  }
}

export default useNowPlayingMovies