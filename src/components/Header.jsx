import React from 'react'
import { NETFLIX_LOGO } from '../constants/ImageAddress';

const Header = () => {
  return (
    <div className="absolute z-30 bg-gradient-to-b from-black to-transparent">
        <img className="w-48" src={NETFLIX_LOGO} 
        alt='Netflix'
        />
    </div>
  )
}

export default Header;