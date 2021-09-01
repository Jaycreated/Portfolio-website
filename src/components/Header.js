import React from 'react'
import profile from '../Assets/guy.jpeg'
//import {FaSearch} from 'react-icons/fa'

const Header = () => {
    return (
      <div className='lg:flex justify-between py-16 bg-white'>
          <div className='px-16 text-black'>
             <h3 className='text-3xl font-bold pt-64'>Hello.</h3>
             <h1 className='text-6xl font-bold'> I'm <span className='text-black'>Johnson.</span></h1>
             <h2 className='text-3xl font-bold'> &nbsp;<span class="title">Web Developer</span></h2> 

         
            <nav className='pt-10'>
               <ul className='flex items-center'>
                 <li className='rounded bg-black py-2 px-2 hover:bg-black text-white py-2 px-2'><a href='#get resume'>Get Resume</a></li>
                 <li className='mx-10 rounded bg-black py-2 px-2 hover:bg-black text-white py-2 px-2 animate-bounce'><a href='#Hire me'>Hire me</a></li>
               </ul>
            </nav>
         
      </div>
            <div className='py-8'>
                 <img className=' w-full' src={profile} alt='programmer illustration'></img>
            </div> 
      </div>  
    )
};

export default Header