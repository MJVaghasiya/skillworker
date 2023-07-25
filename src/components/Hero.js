import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='hero-big-font' >Connect with <span className='font-red italic-font'>thousands of workers</span> near you</h1>

        <div className='option d-flex '>
          <p className='about-option' >Instawork intelligently matches businesses with our vetted pool of <span style={{ fontWeight: "700" }} >4 million</span> short-term, seasonal, and temp-to-hire workers.</p>
          <button className='find-worker' >FIND WORKERS</button>
          <button className='find-worker work' >FIND WORK</button>
        </div>
      </div>
    </div>

  )
}

export default Hero
