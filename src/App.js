import React, { useEffect } from 'react';
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

  // Listen to Firebase auth changes only ONCE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Define routes inline, with simple protection
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
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
