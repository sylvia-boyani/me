import React from 'react'
import './AboutMe.css'
import img from '../assets/img1.jpg'

function AboutMe() {
    return (
        <div className='me'>
            <div className='about-img'>
               <img  src={img} alt="about us" />
            </div>
         <div className='about-content'>
         <p><h1>What makes me different?</h1>
            <h3>My Skills</h3>
            We all have our strengths. I’ve perfected 
            mine <br></br>so you can focus on yours. Get in touch 
            to find <br></br>out how I can help.</p>
            </div>
            
        </div>
    )
}

export default AboutMe;