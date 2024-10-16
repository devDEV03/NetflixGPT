import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import logo from './logo.svg';
import Login from './components/Login';
import Browse from './components/Browse';
import { useEffect } from 'react';
import { auth } from './utils/firebase';
import { Provider, useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import Body from './components/Body';
import appStore from './utils/appStore'


function App() {
return (
  <>
  <Provider store={appStore}>
    <Body />
  </Provider>
  </>
);
 
}

export default App;
