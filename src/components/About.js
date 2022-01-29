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

            <ScrollIntoView selector=''>
                <div className='mx-auto p-20'>
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
                </div>
            </ScrollIntoView>
        </div>
    )
}

export default About
