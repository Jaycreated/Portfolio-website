import React from 'react'
import NavLink from './NavLink'
import { useState } from 'react'


const Mobilenav = ({toggle }) => {


    return (
        <div className=''>
         



        <div className='px-8 cursor-pointer' onClick={toggle}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
  
        </div>

        <div classname=''>
        
      </div>


        </div>
    )
}

export default Mobilenav
