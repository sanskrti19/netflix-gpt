import { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setSignInForm]=useState(true);
    const toggleSigninForm=()=>{
        setSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />

       
      <div className="absolute w-full h-full -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg"
          alt="bg-img"
          className="w-full h-full object-cover"
        />
      </div>

       
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-96 p-10 bg-black bg-opacity-80 text-white rounded-lg space-y-4">
        <h1 className="text-3xl font-bold">{isSignInForm? "Sign In":"Sign Up"}</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 w-full bg-gray-800 rounded"
        />
        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-3 w-full bg-gray-800 rounded"
        />)}
        <input
          type="password"
          placeholder="Password"
          className="p-3 w-full bg-gray-800 rounded"
        />
        <button className="p-3 bg-red-700 w-full hover:bg-red-600 transition">
          {isSignInForm? "Sign In":"Sign Up"}
        </button>
        <p className='py-4 cursor-pointer'onClick={toggleSigninForm}>{isSignInForm? "New to Netflix? Sign Up now!": "Already a member? Sign In now " }</p>
      </form>
    </div>
  );
};

export default Login;
