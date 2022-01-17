import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
    return (
        <div>
        <div className=''>
        <ul className='md:flex items-center'>
         <Link to='/'>
           <li className='mx-10 py-2 px-2 py-2 px-2'>Home</li>
         </Link>
         <Link to='/About'>
           <li className='mx-10 py-2 px-2 py-2 px-2'>About</li>
         </Link>
          
          <li className='mx-10 rounded bg-black py-2 px-2 hover:bg-black text-white py-2 px-2'><a href='mailto:jaycreatedit@gmail.com'>Let's Talk</a></li>
          
           
        </ul>

      </div>
        </div>
    )
}

export default NavLink
