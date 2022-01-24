import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='py-5 border-t-3/2'>
            <div className='flex justify-center mt-4'>
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full  hover:text-white transition-colors duration-300' href='https://github.com/Jaycreated'>
                    <FaGithub />
                    <span className='sr-only'>Github </span>
                </a>

                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full  hover:text-white transition-colors duration-300' href='https://twitter.com/home'>
                    <FaTwitter />
                    <span className='sr-only'>Github </span>
                </a>

                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full  hover:text-white transition-colors duration-300' href='https://www.linkedin.com/in/johnson-john-9145411a7/'>
                    <FaLinkedin />
                    <span className='sr-only'>Github </span>
                </a>
            </div>
              <div className='flex justify-center mt-4'>
                  <p className='text-black mb-4'>
                      <a className='text-blue-500 hover:underline' href='mailto:Johnsonjohnadakole@gmail.com'>JOHNSON.</a>
                  </p>

              </div>
        </div>
    );
};

export default Footer;
