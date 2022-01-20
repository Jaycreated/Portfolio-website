import React from 'react'
//import profile from '../Assets/guy.jpeg'
//import {FaSearch} from 'react-icons/fa'

const Home = () => {
    return (
        <section className={Home}>
      <div className='lg:flex justify-between md:flex justify-between bg- h-96'>
          <div className='px-16 text-black'>
            <div className='text-black text-opacity-75 pt-32'>
              <h1 className='text-4xl md:text-3xl lg:text-6xl font-bold'>Johnson.</h1>
              <h2 className='text-3xl md:text-2xl lg;text-4xl font-bold'> &nbsp;<span className="title">Web Developer</span></h2>
            </div>
         
            <nav className='pt-10'>
               <ul className='flex items-center'>
               <div className=''>
                <li><a href='https://docs.google.com/document/d/1DukFofN4vDFJIrhGHqKRfVVRUoNPqRTNKVHqcqhllnw/edit?usp=sharing' className='rounded bg-black hover:bg-black text-white py-2 px-2 w-full'>Resume</a></li>
               </div>
                 <li className='mx-10 rounded bg-black py-2 px-2 hover:bg-black text-white py-2 px-2 animate-bounce w-full'><a href='mailto:Jaycreatedit@gmail.com'>Hire me</a></li>
               </ul>
            </nav>
         
      </div>

      </div>
        </section>

    )
};

export default Home