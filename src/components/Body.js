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
        
        <div className='pt-10 flex'>
           
            <div className = ''>
                <img className= 'w-48 shadow-2xl rounded-full' src={profile} alt = 'profile' />
            </div>
      
        

            <div className='ml-16 text-center w-full'>
            <span className='font-bold text-xl'>JOHNSON JOHN</span>
        
            <button className='border w-full rounded-lg font-bold p-2'>Resume</button>

            <div className='flex justify-between mt-4'>
        
            <span className='rounded-full'>
                <DiMongodb
                className='w-10 h-10 text-green-800'
                />
            </span>

            <span className='rounded-full ml-2'>
                <SiExpress
                className='w-10 h-10'
                />
             </span>

             <span className='rounded-full ml-2'>
                <FaReact
                className='w-10 h-10 text-blue-800'
                />
            </span>

            <span className='rounded-full ml-2'>
                <FaNode
                className='w-10 h-10 text-green-800'
                />
            </span>
            </div>
            </div>
        </div>

        <div>
        <p className='text-base text-lg leading-relaxed mt-16'>
        Software Engineer with good work Ethics and a great communication skill. He loves the concept of building web applications, he loves solving challenging problems and advancing his skills.
        </p>
        </div>

        </>
    )
}

export default Body
