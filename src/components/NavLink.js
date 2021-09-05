import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
    return (
        <div>
        <div className='pr-8 md:block hidden'>
        <ul className='sm:flex-colummn md:flex items-center'>
         <Link to='/'>
           <li className='mx-10 py-2 px-2 py-2 px-2'>Home</li>
         </Link>
         <Link to='/Contact'>
           <li className='mx-10 py-2 px-2 py-2 px-2'>About</li>
         </Link>
          <Link to=''>
          <li className='mx-10 rounded bg-black py-2 px-2 hover:bg-black text-white py-2 px-2'><a href='let talk'>Let's Talk</a></li>
          </Link>
           
        </ul>

      </div>
        </div>
    )
}

export default NavLink
