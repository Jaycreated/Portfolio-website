import React from 'react';
//import ScrollIntoView from 'react-scroll-into-view';
//import {FaChevronDown} from "react-icons/all";

const About = () => {
    return(
        <div className='p-5'>

            <div>
                <p className='text-2xl text-black md:text-4xl font-bold text-center'>
                    Hello 👋🏾
                </p>

                <p className='text-base sm:text-xl text-gray-600 leading-relaxed mt-4'>
                    Johnson John is an ardent Software Engineer with good work Ethics and a great communication skill. He loves the concept of building web applications, he loves solving challenging problems and advancing his skills.
                </p>

            </div>


                <div className='mx-auto p-10'>
                    <p className='text-2xl text-black md:text-4xl font-bold text-center'>Tech Stack:</p>
                    <p className='text-base sm:text-xl  text-gray-600 leading-relaxed mt-4'>Html | css | Javascript | Typescript | React js | Node js | Mongo db | Tailwind css |</p>
                </div>

        </div>
    )
}

export default About
