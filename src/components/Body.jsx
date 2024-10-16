import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../components/Login';
import Browse from '../components/Browse';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';


const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
      {
        path : "/",
        element : <Login />
      },
      {
        path : "/browse",
        element : <Browse />
      }
    ]);
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid , email, displayName, photoURL} = user;
            dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
        }
      });
    },[]);
  
    return (
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    );
}

export default Body