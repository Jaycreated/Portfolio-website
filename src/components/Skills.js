import React from 'react';
import Profile from  '../Assets/Calculate.png'
//import {SiReact, SiTailwindcss, SiJavascript} from 'react-icons/si'
//import {FaReact,} from 'react-icons/fa'

const Skills = () => {
    return (
        <div className='max-w-4xl mx-auto justify-center py-12'>
           <p className='text-2xl text-black sm:text-4xl pt-4 font-bond'>Projects.
           </p>
            <div className='flex flex-wrap justify-center pt-2'>
               <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
               <p className='mt-6 text-xl sm:text-2xl font-semibold text-center '></p>
               </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                    <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'></p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                   <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'></p>
                </div>

                <div>
                    <p className= 'flex flex-col overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52 mt-6 text-xl sm:text-2xl text-center'>
                        <img className='' src={Profile} alt='calculate'/>
                        <p>calculator</p>
                        <a href='https://calculatewithme.netlify.app/'>view</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;