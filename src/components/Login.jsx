import React, { useState } from 'react'
import Header from './Header';
import { BACKGROUND_IMAGE } from '../constants/ImageAddress';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isSignIn, setIsSignIn ] = useState(true);

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div><Header />
    <div className='bg-black absolute'>
    <img className='opacity-30 object-cover w-full h-full' src={BACKGROUND_IMAGE}
    alt='image'/>
    </div>
    <div className='text-white opacity-60'>
        <form className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0'>  
            <h1 className='font-bold text-3xl m-4'>{ isSignIn ? 'Sign In' : 'Sign Up'}</h1>
            { !isSignIn && <input className='p-2 m-2 w-full bg-gray-700' name='name' type='text' placeholder='Full Name' /> }
            <input className='p-2 m-2 w-full bg-gray-700' name='email' type='text' placeholder='Email or phone number' />
            <input className='p-2 m-2 w-full bg-gray-700' name='password' type='password' placeholder='password' />
            { isSignIn ? <button className='bg-red-600 p-4 m-2 w-full'>Sign In</button>
            : <button className='bg-red-600 p-4 m-2 w-full'>Sign Up </button> }
            <p className='p-2 my-4 cursor-pointer' onClick={handleIsSignIn}>{ isSignIn ? 'New to Netflix? Sign up' : 'Already a member? Sign In' } </p>
        </form>
    </div>
    </div>
  )
}

export default Login;