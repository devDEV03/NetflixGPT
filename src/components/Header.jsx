import React, { useState } from 'react'
import NetflixLogo from '../resources/Netflix_Logo_PMS.png'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { toggleGptSearchView } from '../utils/gptSlice';
import { ProfilePFPLink, SUPPORTED_LANGUAGES } from '../utils/constant';
import {changePreferredLanguage} from "../utils/configSlice";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.gptSearch);

    // We have used onAuthStateChanged here in the header because it is consistent throughout the app and helps in restricting some endpoints based on whehter the user is logged in or not.
    // We check whether the user is logged in by onAuthStateChanged,if the user is not null then it will add it in the slice and keep it on the browse page and if it is null then we will stay on the log in page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user1) => {
      if (user) {
          const {uid , email, displayName, photoURL} = user1;
          dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          navigate("/browse");
        } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  },[]);


// For signing out users
  const signOutUser = () => {
    signOut(auth).then(() => {
      // navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleToggleSearchView = () => {
    dispatch(toggleGptSearchView());
  }

  const handleSelect = (e) => {
    dispatch(changePreferredLanguage(e.target.value))
    
  }
  return (
    <div className='absolute w-screen  px-8 py-2 bg-gradient-to-br from-black z-10 flex flex-col md:flex-row  md:justify-between'>
      
        <img className='w-44 mx-auto md:mx-0' src={NetflixLogo} alt="logo" />

        {user && <div className='flex gap-6 justify-between '>
         
         {gptSearch && ( <select onChange={e => handleSelect(e)} className='my-auto h-14 py-0 px-3 bg-gray-900 text-white'>
            {
              SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.language}</option>)
            }
          </select>
         )
        }
          <button className='m-3 py-2 px-4 bg-purple-500 text-white rounded-xl' onClick={handleToggleSearchView}>{gptSearch ? "Home Page" : "Gpt Search"}</button>
          <img className="w-12 h-12 m-2 hidden md:flex" src= {ProfilePFPLink + user?.photoURL} alt="" />
          <button className='font-bold text-white p-3 bg-red-600 rounded-lg my-auto mx-6 hover:bg-white hover:bg-red-300 ' onClick={signOutUser}>Sign out</button>
        </div>}
    </div>
  )
}

export default Header