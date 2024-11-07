import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { handleForm } from '../utils/validation';
import { auth} from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGIN_BACKGROUND, PHOTO_URL } from '../utils/constant';

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();


  const handleFormValidation = () => {
    const val = handleForm(email.current.value, password.current.value);
    setErrorMessage(val);

    if (val) return;

    if (!signIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: PHOTO_URL
          }).then(() => {
            const {uid , email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          }).catch((error) => {
           
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User Not Found")

        });
    }
  }

  return (
    <div >
      <Header />
      <div className='absolute -z-10 '>
        <img className='h-screen md:w-screen md:h-full object-cover' src= {LOGIN_BACKGROUND} alt="bg" />
      </div>
      <form className='w-5/6 my-28 p-4 md:w-1/3 absolute md:my-36 mx-auto right-0 left-0 bg-opacity-80 bg-black flex flex-col md:p-10' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-2xl md:text-4xl text-white my-8 mx-4'>{(signIn) ? "Sign In" : "Sign Up"}</h1>
        <input type="text"
          placeholder='Email Address'
          className='p-3 m-3 md:p-4 md:m-4 rounded-md border border-white bg-black bg-opacity-50 text-white'
          ref={email}
        />
        {!signIn && (
          <input type="text"
            placeholder='Full Name'
            className='p-3 m-3  md:p-4 md:m-4 rounded-md border border-white bg-black bg-opacity-50 text-white'
            ref={name}
          />
        )
        }
        <input type="password"
          placeholder='Password'
          className='p-3 m-3  md:p-4 md:m-4 rounded-md border border-white bg-black bg-opacity-50 text-white'
          ref={password}
        />
        <button on className='p-3 m-3  md:p-4 md:m-4 bg-red-600 rounded-md text-white' onClick={handleFormValidation}>{(signIn) ? "Sign In" : "Sign Up"}</button>
        <p className='text-lg font-bold text-red-500 m-1'>{errMessage}</p>
        <p className='p-3 m-3  md:p-4 md:m-4 text-white font-semibold cursor-pointer hover:underline' onClick={() => setSignIn((prevSign) => !prevSign)} >{(signIn) ? "New to Netflix? Sign Up" : "Already Registered? Sign In Now"} </p>
      </form>
    </div>
  )
}

export default Login