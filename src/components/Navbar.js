import React from 'react'
import Navigation from './Navigation'
import Mobilenav from './Mobilenav'


const Navbar = () => {
    return (
        <div className='fixed w-full bg-white text-black shadow-2xl z-50'>
        <div className='flex items-center justify-between pl-20 h-16'>
        <div className='logo'>
        <h3>&lt;/<span className='text-2xl font-bold text-black'>JAY</span>&gt;</h3>
        </div>
          <div className='hidden md:flex'>
            <Navigation />
          </div>

            <div className='md:hidden'>
            <Mobilenav />
            </div>
        </div>
        </div>
    )
}

export default Navbar
