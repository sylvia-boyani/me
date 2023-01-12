import React from 'react';
import './Home.css';
import Nav from '../components/Nav'


function Home() {
  return (
    <div className='home'>
       <Nav />
     <div className='content'>
     <h1>Be A Digital Innovator</h1>
     <p>Digital technologies are disrupting 
        old industries and creating new ones. <br></br>
        This brings lots of opportunities, but 
        challenges as well. Are you ready for them?</p> 
     </div>
    </div>
  );
}

export default Home;
