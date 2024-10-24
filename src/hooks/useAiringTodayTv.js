import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { addAiringToday } from '../utils/tvSlice';

const useAiringTodayTv = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAiringTodayTV();
  },[])

  async function getAiringTodayTV(){
    const data = await fetch("https://api.themoviedb.org/3/tv/airing_today",API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addAiringToday(json?.results));
    
  }
}

export default useAiringTodayTv
