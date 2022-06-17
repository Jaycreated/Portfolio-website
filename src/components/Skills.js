import React from 'react';
import Profile from  '../Assets/Calculate.png'
//import {SiReact, SiTailwindcss, SiJavascript} from 'react-icons/si'
//import {FaReact,} from 'react-icons/fa'

const Skills = () => {
    return (
        <>
            <p className='text-center font-bold mt-16 pt-6 border-t-2'>PORTFOLIO</p>

        <div className='grid md:gap-6 gap-2 grid-cols-3 mt-8'>

                       <a className='rounded-md' href=''>
                           <img className='' src={Profile} alt='calculate' />
                       </a>

                    <div className=''>
                        <img className='' src={Profile} alt='calculate' />
                    </div>

                    <div className=''>
                        <img className='' src={Profile} alt='calculate' />
                    </div>

                    <div className=''>
                        <img className='' src={Profile} alt='calculate' />
                    </div>

                    <div className=''>
                        <img className='' src={Profile} alt='calculate' />
                    </div>

                    <div className=''>
                        <img className='' src={Profile} alt='calculate' />
                    </div>
        </div>
        </>
    );
};

export default Skills;