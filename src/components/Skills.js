import React from 'react';
import Profile from  '../Assets/Calculate.png'
//import {SiReact, SiTailwindcss, SiJavascript} from 'react-icons/si'
//import {FaReact,} from 'react-icons/fa'

const Skills = () => {
    return (
        <div className='grid gap-4 grid-cols-3 grid-rows-3'>
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

                    <div className=''>
                        <img className='' src={Profile} alt='calculate' />
                    </div>
        </div>
    );
};

export default Skills;