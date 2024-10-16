import React from 'react'
import NetflixLogo from '../resources/Netflix_Logo_PMS.png'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const signOutUser = () => {
    signOut(auth).then(() => {
      navigate("/")
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