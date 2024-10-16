import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { handleForm } from '../utils/validation';
import { auth} from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate(); 
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
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/123757089?v=4"
          }).then(() => {
            const {uid , email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          navigate("/browse");
          }).catch((error) => {
            // An error occurred
            // ...
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
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)

        });
    }
  }

  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="bg" />
      </div>

      <form className='w-1/3 absolute my-36 mx-auto right-0 left-0 bg-opacity-80 bg-black flex flex-col p-10' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-4xl text-white my-8 mx-4'>{(signIn) ? "Sign In" : "Sign Up"}</h1>
        <input type="text"
          placeholder='Email Address'
          className='p-4 m-4 rounded-md border border-white bg-black bg-opacity-50 text-white'
          ref={email}
        />
        {!signIn && (
          <input type="text"
            placeholder='Full Name'
            className='p-4 m-4 rounded-md border border-white bg-black bg-opacity-50 text-white'
            ref={name}
          />
        )
        }
        <input type="password"
          placeholder='Password'
          className='p-4 m-4 rounded-md border border-white bg-black bg-opacity-50 text-white'
          ref={password}
        />
        <button on className='p-4 m-4 bg-red-600 rounded-md text-white' onClick={handleFormValidation}>{(signIn) ? "Sign In" : "Sign Up"}</button>
        <p className='text-lg font-bold text-red-500 m-1'>{errMessage}</p>
        <p className='py-4 m-4 text-white font-semibold cursor-pointer hover:underline' onClick={() => setSignIn((prevSign) => !prevSign)} >{(signIn) ? "New to Netflix? Sign Up" : "Already Registered? Sign In Now"} </p>
      </form>
    </div>
  )
}

export default Login