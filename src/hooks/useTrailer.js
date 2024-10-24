import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const useTrailer = (movieId) => {

    const dispatch = useDispatch();

    useEffect(() => {
        getMyVideo();
    },[])

    async function getMyVideo() {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((items) => items?.name === "Official Trailer");
        const trailer = (filterData.length) ? filterData[0] : json.results[0];
        // console.log(trailer.id);
        dispatch(addTrailer(trailer.key));
        
    }
  
}

export default useTrailer