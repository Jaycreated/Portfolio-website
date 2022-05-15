import React from 'react';
import profile from '../Assets/Face.png'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Card = () => {
    return (
        <div className = 'w-full'>
           <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5'>
               <div className=''>
                   <img className= 'w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt = 'profile' />
               </div>
               <div className='text-center mt-5'>
                   <p className='text-xl sm:text-2xl  text-gray-900 '>
                       Jay
                   </p>
                   <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 '>
                       SOFTWARE ENGINEER.
                   </p>

                   <div className='flex align-center justify-center mt-4'>
                       <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full  hover:text-white transition-colors duration-300' href='https://github.com/Jaycreated'>
                           <FaGithub />
                           <span className='sr-only'>Github </span>
                       </a>

                       <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full  hover:text-white transition-colors duration-300' href='https://twitter.com/Jaycreated_'>
                           <FaTwitter />
                           <span className='sr-only'>Github </span>
                       </a>

                       <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full  hover:text-white transition-colors duration-300' href='https://www.linkedin.com/in/johnson-john-9145411a7/'>
                           <FaLinkedin />
                           <span className='sr-only'>Github </span>
                       </a>

                   </div>
               </div>

           </div>
        </div>
    );
};

export default Card;