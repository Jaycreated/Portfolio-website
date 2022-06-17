import profile from '../Assets/Face.png'
import React from 'react';
import {DiMongodb} from "react-icons/di";
import {FaReact} from 'react-icons/fa';
import {SiExpress} from 'react-icons/si'
import {FaNode} from 'react-icons/fa'
//import ScrollIntoView from 'react-scroll-into-view';
//import {FaChevronDown} from "react-icons/all";

const Body = () => {
    return(

        <>
        
        <div className='md:pt-10 pt-4 flex'>

        
        
        <div className = 'w-32 md:w-full'>
            <img className= 'md:w-48 w-32 shadow-2xl rounded-full' src={profile} alt = 'profile' />
        </div>

            <div className='sm:ml-16'>

            <div className='md:flex'>
            <div className='text-2xl text-black text-4xl sm:mb-4'>
                <p>JOHNSON JOHN</p>
            </div>
                <div className='md:ml-16'>
                  <button className='border p-2 rounded-lg sm:w-full font-bold'>RESUME</button>
                </div>
            </div>
            
            <div className='sm:hidden md:block'>
                <p className='text-base sm:text-xl text-gray-600 leading-relaxed md:mt-4 mt-16'>
                    Software Engineer with good work Ethics and a great communication skill. He loves the concept of building web applications, he loves solving challenging problems and advancing his skills.
                </p>


                <div className='mt-16'>
                <p className='text-2xl text-black md:text-4xl'>Tech Stack:</p>
                <div className='flex justify-between mt-4'>
        
                    <span className='rounded-full'>
                        <p>Mongodb</p>
                        <DiMongodb
                        className='w-16 h-16 text-green-800'
                        />
                    </span>
        
                    <span className='rounded-full'>
                    <p>Express js</p>
                        <SiExpress
                        className='w-16 h-16'
                        />
                     </span>
        
                     <span className='rounded-full'>
                     <p>React js</p>
                        <FaReact
                        className='w-16 h-16 text-blue-800'
                        />
                    </span>
        
                    <span className='rounded-full'>
                    <p>Node.js</p>
                        <FaNode
                        className='w-16 h-16 text-green-800'
                        />
                    </span>
                    </div>
        
                </div>
            </div>
                </div>
        </div>


        <div className='md:hidden'>
        <p className='text-base sm:text-xl text-gray-600 leading-relaxed md:mt-4 mt-16'>
            Software Engineer with good work Ethics and a great communication skill. He loves the concept of building web applications, he loves solving challenging problems and advancing his skills.
        </p>

       <div className='mt-4'>
       <p className='text-2xl text-black text-4xl'>Tech Stack:</p>


       <div className='flex justify-between mt-4 mx-10'>
        
       <span className='rounded-full'>
           <p>Mongodb</p>
           <DiMongodb
           className='w-16 h-16 text-green-800'
           />
       </span>

       <span className='rounded-full'>
       <p>Express js</p>
           <SiExpress
           className='w-16 h-16'
           />
        </span>

        <span className='rounded-full'>
        <p>React js</p>
           <FaReact
           className='w-16 h-16 text-blue-800'
           />
       </span>

       <span className='rounded-full'>
       <p>Node.js</p>
           <FaNode
           className='w-16 h-16 text-green-800'
           />
       </span>
       </div>
       </div>
        </div>

        </>
    )
}

export default Body
