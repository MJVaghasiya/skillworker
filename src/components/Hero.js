import img from '../assets/hero-0img.jpg'
import React, { useState, useEffect } from 'react';
import PopupForm from './PopupForm';

import './Findworker.css'




const Hero = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    <div>
      <div className='hero-img'>
      <div className='container'>
     <div className='hero-text'>
      <h5>Welcome to</h5>
      <h1 className='fw-bolder' >SKILL WORKER</h1>
      <p style={{fontSize:"1.2rem"}} >Skill worker provides the highest quality of Workers, leading the field in customer service.</p>
      <button onClick={togglePopup} className='find-worker work' >FIND WORK</button>
      <PopupForm isOpen={isPopupOpen} onClose={togglePopup} />

     
      <hr style={{width:"100%", border:"1.5px solid #585858"}}/>
      <h5>Looking for care at home?</h5>
      <div className='postcode'>
        <input type="search" placeholder='Enter your postcode'></input>
      <button>GO</button>
        
      </div>

     </div>
     
      </div>
    </div>
    </div>

  )
}

export default Hero
