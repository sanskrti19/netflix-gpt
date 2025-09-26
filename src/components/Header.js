import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { LOGO } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Sign out error:", error);
      navigate("/error");
    });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center space-x-4">
         <button className='py-2 px-4 my-2 bg-purple-800 text-white rounded-lg '>GPT Search</button>
          <img
            className="w-12 h-12 rounded-full"
            src={user.photoURL || "https://i.pravatar.cc/48?img=3"}
            alt="usericon"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
