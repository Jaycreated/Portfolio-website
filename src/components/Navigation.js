import React from 'react'

const Navigation = () => {
    return (
        <nav className='fixed w-full flex items-center justify-between pl-20 pr-20 h-16 bg-white text-black shadow-2xl z-50'>
        <div className='logo'>
        <h3>&lt;/<span className='text-2xl font-bold text-black'>JAY</span>&gt;</h3>
        </div>

        <div className='px-4 cursor-pointer md:hidden'>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        
        </div>

        <div className='pr-8 md:block hidden'>
          <ul className='flex items-center'>
            <li className='mx-10 py-2 px-2 py-2 px-2'><a href='Home'>Home</a></li>
            <li className='mx-10 py-2 px-2 py-2 px-2'><a href='About'>About</a></li>
            <li className='mx-10 rounded bg-black py-2 px-2 hover:bg-black text-white py-2 px-2'><a href='let talk'>Let's Talk</a></li>
          </ul>

        </div>

        
        </nav>
    )
}

export default Navigation
