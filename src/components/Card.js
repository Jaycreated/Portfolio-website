import React from 'react';
import profile from '../Assets/Face.png'
//import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Card = () => {
    return (
        <div className = 'w-32 md:w-full'>
               <div className=''>
                   <img className= 'w-64 mx-auto shadow-2xl rounded-full' src={profile} alt = 'profile' />
               </div>
        </div>
    );
};

export default Card;