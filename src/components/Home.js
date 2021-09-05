import React from 'react'
import profile from '../Assets/guy.jpeg'
//import {FaSearch} from 'react-icons/fa'

const Header = () => {
    return (
      <div className='lg:flex justify-between md:flex justify-between bg-white'>
          <div className='px-16 text-black'>
            <div className='text-black text-opacity-75'>
              <h3 className='text-3xl   font-bold pt-64'>Hello.</h3>
              <h1 className='text-4xl md:text-3xl lg:text-6xl font-bold'> I'm <span className=''>Johnson.</span></h1>
              <h2 className='text-3xl md:text-2xl lg;text-4xl font-bold'> &nbsp;<span class="title">Web Developer</span></h2> 
            </div>
         
            <nav className='pt-10'>
               <ul className='flex items-center'>
                 <li><a href='#get resume' className='rounded bg-black hover:bg-black text-white py-2 px-2 w-full'>Resume</a></li>
                 <li className='mx-10 rounded bg-black py-2 px-2 hover:bg-black text-white py-2 px-2 animate-bounce w-full'><a href='#Hire me'>Hire me</a></li>
               </ul>
            </nav>
         
      </div>
            <div className='md:py-32'>
                 <img className=' w-full' src={profile} alt='programmer illustration'></img>
            </div> 
      </div>  
    )
};

export default Header