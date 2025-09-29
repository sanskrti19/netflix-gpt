import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch} from "react-redux" 
import React from 'react';
import {addUser} from "../utils/userSlice"
import { useNavigate } from 'react-router-dom';  
import { BGIMG, PROFILEURL } from '../utils/constant';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();  
    
    const dispatch=useDispatch();
    const name=useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;
        
        if (!isSignInForm) {
            
            createUserWithEmailAndPassword(
                auth, 
                email.current.value,
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                
                updateProfile(user,{
                    displayName:name.current.value,
                    photoURL:PROFILEURL
                    
                }).then(()=>{
                    const {uid,email,displayName,photoURL}=auth.currentUser;
                    dispatch(
                        addUser({
                            uid:uid,
                            email:email,
                            displayName:displayName ,
                            photoURL:photoURL
                        })
                    )
                    
                    navigate("/browse"); 
                }).catch((error)=>{
                    setErrorMessage(error.message)
                });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-" + errorMessage);
                
            });
        } else {
            
            signInWithEmailAndPassword(auth,email.current.value,password.current.value).then((userCredential)=>{
               
                const user=userCredential.user;
                navigate("/browse"); 
                
            })
            .catch((error)=>{
                const errorCode=error.code;
                const errorMessage=error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
            });
        }
    };
    
    const toggleSigninForm = () => {
        setSignInForm(!isSignInForm);
    };
    
    return (
        <div>
        <Header />
        
        <div className="fixed  inser-0-z-10">
        <img  
        src= {BGIMG}
        alt="bg-img"
        className="h-full w-full object-cover"
        />
        </div>
        
        <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-96 p-10 bg-black bg-opacity-80 text-white rounded-lg space-y-4"
        >
        <h1 className="text-3xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        <input
        ref={email}
        type="text"
        placeholder="Email Address"
        className="p-3 w-full bg-gray-800 rounded"
        />
        
        {!isSignInForm && (
            <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 w-full bg-gray-800 rounded"
            />
        )}
        
        <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-3 w-full bg-gray-800 rounded"
        />
        
        <p className="text-red-500 font-bold">{errorMessage}</p>
        
        <button
        className="p-3 bg-red-700 w-full hover:bg-red-600 transition"
        onClick={handleButtonClick}
        >
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        
        <p className="py-4 cursor-pointer" 
        onClick={toggleSigninForm}>
        {isSignInForm
            ? "New to Netflix? Sign Up now!"
            : "Already a member? Sign In now"}
        </p>
        </form>
        </div>
    );
};

export default Login;