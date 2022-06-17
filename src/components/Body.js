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
        
        <div className='pt-10 flex md:mx-64 mx-2'>
           
            <div className = ''>
                <img className= 'md:w-48 w-full shadow-2xl rounded-full' src={profile} alt = 'profile' />
            </div>
      
        

            <div className='md:ml-16 mt-8 pt-10  w-full mx-2'>

         <div className='mb-4 text-center'>
            <p className='font-bold md:text-xl'>JOHNSON JOHN</p>
        </div>

            <div className=''>
            <button className='border w-full rounded-lg font-bold p-2'>Resume</button>
            </div>
           
            </div>
        </div>

        <div className='mt-6 md:mx-64 mx-2'>
        <p className='font-DancingScript font-bold text-2xl'> Software Engineer </p>
        <div className='font-bold m-6'>
            <p>Good Work Ethics</p>
            <p>Great Communication Skills</p>
            <p>Loves the concept of building web applications, loves solving challenging problems and advancing his skills.</p>
        
        </div>
        </div>

        </>
    )
}

export default Body
