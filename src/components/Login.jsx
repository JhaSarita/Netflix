import React, { useRef, useState } from 'react'
import Header from './Header';
import { BACKGROUND_IMAGE } from '../constants/ImageAddress';
import { checkValidateData } from '../utils/validations';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleIsSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    const handleSignInButton = () => {
        const message = checkValidateData(emailRef.current.value, passwordRef.current.value);
        setErrorMessage(message);
        console.log('Message : ', message);
    }

    return (
        <div><Header />
            <div className='bg-black absolute'>
                <img className='opacity-40 object-cover w-full h-full' src={BACKGROUND_IMAGE}
                    alt='image' />
            </div>
            <div className='text-white opacity-60'>
                <form onSubmit={(e) => e.preventDefault() } className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0'>
                    <h1
                        className='font-bold text-3xl m-4'>{isSignIn ? 'Sign In' : 'Sign Up'}
                    </h1>
                    {!isSignIn && <input className='p-2 m-2 w-full bg-gray-700 text-white' name='name' type='text' placeholder='Full Name' />}
                    <input className='p-2 m-2 w-full bg-gray-700' ref={emailRef} name='email' type='text' placeholder='Email or Phone Number' />
                    <input className='p-2 m-2 w-full bg-gray-700' ref={passwordRef} name='password' type='password' placeholder='Password' />
                    {errorMessage && <p className='text-red-600 font-bold p-2'>{errorMessage}</p>}
                    <button disabled={errorMessage} onClick={handleSignInButton} className='bg-red-600 p-4 m-2 w-full'>{isSignIn ? 'Sign In' : 'Sign Up '}</button>
                    <p className='p-2 my-4 cursor-pointer' onClick={handleIsSignIn}>{isSignIn ? 'New to Netflix? Sign up' : 'Already a member? Sign In'} </p>
                </form>
            </div>
        </div>
    )
}

export default Login;