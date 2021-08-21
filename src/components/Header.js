import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Header = () => {
    return (
        <div>
           <header className='flex items-center justify-between px-5 py-3'>
             <div className='logo'>
             <h3>&lt;/<span>Johnson</span>&gt;</h3>
             </div>

             <nav>
               <ul className='flex items-center'>
                 <li className='mx-2'><a href='#Home'>Home</a></li>
                 <li className='mx-2'>About</li>
                 <li className='mx-2'>Contact</li>
                 <li><FaSearch /></li>
               </ul>

             </nav>

             <div id="nav-btn" target="_blank" rel="noopener" onclick="window.open('mailto:aromalanilkannan@gmail.com');">
               <p>Let's Talk</p>
             </div>

           </header> 

        </div>
    )
}

export default Header
