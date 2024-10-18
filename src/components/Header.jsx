import React from 'react'
import NetflixLogo from '../resources/Netflix_Logo_PMS.png'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

    
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          const {uid , email, displayName, photoURL} = user;
          dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          navigate("/browse");
        } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  },[]);

  const signOutUser = () => {
    signOut(auth).then(() => {
      // navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between'>
        <img className='w-44' src={NetflixLogo} alt="logo" />

        {user && <div className='flex '>
          <img className="w-12 h-12" src= {user?.photoURL} alt="" />
          <button className='font-bold text-white my-auto' onClick={signOutUser}>Sign out</button>
        </div>}
    </div>
  )
}

export default Header