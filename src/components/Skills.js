import React from 'react';
import {SiReact, SiTailwindcss, SiJavascript} from 'react-icons/si'
import {FaReact,} from 'react-icons/fa'

const Skills = () => {
    return (
        <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
           <p className='text-2xl text-black sm:text-4xl pt-4 font-bond'>
               Tech I Use.
           </p>
            <div className='flex flex-wrap justify-center pt-2'>
               <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                   <SiReact clasName='mx-auto text-4xl ' color='#2196f3'/>
                   <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> ReactJs</p>
               </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                    <SiJavascript clasName='mx-auto text-4xl ' color='#2196f3'/>
                    <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> ReactJs</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                    <SiTailwindcss clasName='mx-auto text-4xl ' color='#2196f3'/>
                    <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> ReactJs</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                    <SiReact clasName='mx-auto text-4xl ' color='#2196f3'/>
                    <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> ReactJs</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                    <SiReact clasName='mx-auto text-4xl ' color='#2196f3'/>
                    <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> ReactJs</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                    <SiReact clasName='mx-auto text-4xl ' color='#2196f3'/>
                    <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> ReactJs</p>
                </div>

                <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl  sm:w-52'>
                    <SiReact clasName='mx-auto text-4xl ' color='#2196f3'/>
                     <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> ReactJs</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;