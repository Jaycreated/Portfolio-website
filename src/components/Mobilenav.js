import React from 'react'
import NavLink from './NavLink'
import { useState } from 'react'


const Mobilenav = () => {

     const  [open, setopen] = useState(false);

    return (
        <div className='flex'>
         
        <div classname=''>
        {open && <NavLink />}
      </div>

        <div className='px-4 cursor-pointer'>
        <button onClick={() => setopen(!open)}> 
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        

        </div>
        </div>
    )
}

export default Mobilenav
