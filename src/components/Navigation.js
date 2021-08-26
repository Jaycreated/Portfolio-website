import React from 'react'

const Navigation = () => {
    return (
        <div className='fixed top-0 w-full'>
        <header className='flex items-center justify-between pl-20 pr-20 py-8 bg-gray-900 text-white'>
        <div className='logo'>
        <h3>&lt;/<span className='text-3xl font-bold text-red-900'>Johnson</span>&gt;</h3>
        </div>

        <nav>
          <ul className='flex items-center '>
            <li className='mx-10 rounded bg-gray-900 py-2 px-2 hover:text-red-700'><a href='#Home'>Home</a></li>
            <li className='mx-10 rounded bg-gray-900 py-2 px-2 hover:text-red-700'><a href='#About'>About</a></li>
            <li className='mx-10 rounded bg-gray-900 py-2 px-2 hover:text-red-700'><a href='Contact'>Contact</a></li>
            <li className='mx-10 rounded bg-red-900 py-2 px-2 hover:bg-red-500 text-white py-2 px-2'><a href='let talk'>Let's Talk</a></li>
          </ul>

        </nav>

        
      </header> 
        </div>
    )
}

export default Navigation
