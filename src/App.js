// App.js
import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';
import Login from './components/Login';
import Browse from './components/Browse';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
      setLoading(false);  
    });
    return () => unsubscribe();
  }, [dispatch]);

   if (loading) {
    return <div className="loading-state">Loading...</div>; 
  }

   const appRouter = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/browse" /> : <Login />
    },
    {
      path: "/browse",
      element: user ? <Browse /> : <Navigate to="/" />
    },
    {
      path: "*",
      element: <h1 className="text-white text-3xl p-10">404 - Not Found</h1>
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;