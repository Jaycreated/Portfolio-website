import React from 'react';
import {FaArrowRight} from "react-icons/all";

const Contact = () => {
    return (
        <div className='max-w-lg w-full text-center m-auto pb-10'>
            <h1 className='text-2xl text-black md:text-4xl font-bold text-center'>Need my Services?</h1>
                <a href='mailto:Johnsonjohnadakole@gmail.com'>
                    <span className='mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer'>
                        <div className='flex flex-row items-center'>
                           <span className='mr-3'>Hit me up.</span>
                            <FaArrowRight color='white'/>
                        </div>
                    </span>
                </a>
        </div>
    );
};

export default Contact;