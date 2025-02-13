import React from 'react'
import { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import Logo from '../../assets/logo.svg'
import Hamburger from '../../assets/icons/icon-hamburger.svg'

const Hero = ({ toggleElements }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-mobile bg-center bg-cover lg:bg-desktop">
      <div className="w-10/12 max-w-6xl m-auto h-screen">
        <div className="py-10 flex items-center justify-between">
          <img
            className={`w-40 ${isMenuOpen ? 'hidden lg:block' : ''}`}
            src={Logo}
            alt=""
            aria-hidden="true"
          />
          <button
            className={`${isMenuOpen ? 'hidden' : ''} lg:hidden`}
            aria-expanded={isMenuOpen}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              toggleElements(false);
            }}
            onKeyDown={() => {
              setIsMenuOpen(!isMenuOpen);
              toggleElements(false);
            }}
          >
            <img src={Hamburger} alt="" aria-hidden="true" />
          </button>
          <NavigationMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            toggleElements={toggleElements}
          />
        </div>
       
       <div className='text-white text-6xl p-6 mt-24 w-full max-w-[425px] uppercase font-josefin border-3 lg:text-7xl lg:border-2 
              lg:max-w-xl'>

        <h1 className="">
          Immersive experiences that deliver
        </h1>
       </div>
       
       
      </div>
    </div>
  )
}

export default Hero