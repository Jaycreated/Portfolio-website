import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from "react-icons/all";

const About = () => {
    return(
        <div className='max-w-4xl mt-20 mx-auto'>
            <p className='text-2xl text-black md:text-4xl font-bold text-center'>
                Hello 👋🏾
            </p>
            <p className='text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4'>
                Johnson John is an ardent Software Engineer with good work Ethics and a great communication skill. He loves the concept of building web applications, he loves solving challenging problems and advancing his skills.
            </p>

                <div className='mx-auto p-10'>
                    <p className='text-2xl text-black md:text-4xl font-bold text-center'>Tech Stack:</p>
                </div>
        </div>
    )
}

export default About
