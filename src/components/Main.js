import React from 'react'
import profile from '../Assets/youngman.jpeg'

const Main = () => {
    return (
        <div>
           <h3>Hi There</h3> 
           <h1>I'm <span>Johnson John</span></h1>
           <h2>I am a &nbsp;<span class="title">Web Developer</span></h2>

           <div class="btn-grp">
                    <div class="btn primary" onclick="window.open('./assets/resources/resume.pdf')">
                        <p>Get Resume</p>
                    </div>

                    <div class=" btn secondary" onclick="window.open('#contact','_self')">
                    <p>Contact Me</p>
                </div>
           </div>   


             <div>
               <img className='dev-img' src={profile} alt='programmer illustration'></img>
             </div>
        </div>
    )
}

export default Main
