import React from 'react'
import profile from '../Assets/bluehair.jpeg'

const About = () => {
    return(
        <div className='flex justify-center bg-gray-800 text-white px-32'>
        <div className= 'pr-32 pt-20'>
              <img className=' w-full' src={profile} alt='programmer illustration2'></img>
           </div>

           <div className=' px-16 py-64 lg:px-16 text-white'>
            <h1 className='text-6xl font-bold'>About Me.</h1>
            <p>I am a web developer, with skills in html, css , javascript(ES6) , React.</p>
           </div>
        </div>
    )
}

export default About
