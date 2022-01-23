import React from 'react';
import profile from '../Assets/Face.png'

const Card = () => {
    return (
        <div className = 'w-full'>
           <div className='flex flex-col justify-center max-w-ms mx-auto bg-whtie shadow-xl rounded-xl p-5 '>
               <div className=''>
                   <img className= 'w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt = 'profile photo' />
               </div>
               <div className='text-center mt-5'>
                   <p className='text-xl sm:text-2xl  text-gray-900 '>
                       Jay
                   </p>
               </div>
           </div>
        </div>
    );
};

export default Card;