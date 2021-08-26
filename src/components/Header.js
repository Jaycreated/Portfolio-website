import React from 'react'
import profile from '../Assets/gee.jpeg'
//import {FaSearch} from 'react-icons/fa'

const Header = () => {
    return (
      <div className='h-screen flex justify-between py-16 bg-gray-900'>
          <div className='h-full px-64 py-64 lg:px-16 text-white'>
             <h1 className='text-6xl font-bold pt-32'> I'm <span className='text-red-900'>Johnson.</span></h1>
             <h2 className='text-3xl font-bold'> &nbsp;<span class="title">Web Developer</span></h2> 

         
            <nav className='pt-10'>
               <ul className='flex items-center'>
                 <li className='rounded bg-red-900 py-2 px-2 hover:bg-red-500 text-white py-2 px-2'><a href='#get resume'>Get Resume</a></li>
                 <li className='mx-10 rounded bg-red-900 py-2 px-2 hover:bg-red-500 text-white py-2 px-2'><a href='#Hire me'>Hire me</a></li>
               </ul>
            </nav>
        
 
         
          </div>
             <div className='px-32 py-32'>
                 <img className=' w-full' src={profile} alt='programmer illustration'></img>
              </div>
      </div>
    )
};

export default Header