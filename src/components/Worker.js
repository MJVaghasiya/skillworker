import React from 'react'
import Navbar from './Navbar'
import vid1 from '../media/36a7d6ce.mp4'
import img1 from '../assets/worker1.svg'
import img2 from '../assets/worker2.svg'
import img3 from '../assets/worker3.svg'
import img4 from '../assets/worker-first-row.webp'
import img5 from '../assets/workerTab3.webp'
import img6 from '../assets/worker-fifth-row.webp'
import img7 from '../assets/worker-fourth-row.webp'
import img8 from '../assets/bartender.svg'
import img9 from '../assets/dishwasher.svg'
import img10 from '../assets/event-server.svg'
import img11 from '../assets/cook.svg'
import img12 from '../assets/concessions.svg'
import img13 from '../assets/picker-packer.svg'
import img14 from '../assets/merchandiser.svg'
import img15 from '../assets/busser.svg'
import Footer from './Footer'


const Worker = () => {
  return (
    <div>
      <Navbar />

        <div className='row w-100'>
          <div className='col-lg-6 worker-first'>
            <h1 className='hero-big-font font-4'>Work when you want and <span className='font-red italic-font'>earn up to $30/hour.</span></h1>
            <p >Join the over 4 million worker who use skill worker to find flexible and temp-to-hire work.</p>
            <button className='find-worker'>SIGN UP</button>
          </div>
          <div className='col-lg-6 '>
            <div className='video-container'>
              <video autoPlay loop muted>
                <source src={vid1} />
              </video>
            </div>

          </div>
        </div>

      {/* <div className='container-fluid'> */}
        <div className='bg-color'>
          <div className='container'>
            <h1 className='strugling-header'>Be your own boss. <br /><span className='font-yellow italic-font'>Get paid instantly. </span></h1>


            {/* BORDER-CONTENT-START */}
            <div className='row worker box'>
              <div className='col-lg-4 text-center worker-card'>
                <img src={img1} />
                <p>Businesses post shifts for positions they need</p>
              </div>
              <div className='col-lg-4 text-center worker-card'>
                <img src={img2} />
                <p>You accept shifts that fit your availability</p>
              </div>
              <div className='col-lg-4 text-center worker-card'>
                <img src={img3} />
                <p>Get paid instantly after eligible shifts</p>
              </div>
            </div>
          </div>
        </div>
        

        <div className='container'> 
{/* FIRST-ROW */}
        <div className='row mt-10'>
          <div className='col-lg-6 for-worker-about p-0'>
            <div className='border-top-bottom-yellow width-pad'>
              <h2 className='for-worker-heading '>Earn more, <span className='font-red italic-font'>faster.</span></h2>
              <ul className='list'>
                <li>We pass along all of your earnings</li>
                <li>Make more for urgent  requests and peak times</li>
                <li>Instant payment after eligible shifts</li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6'>
            <img className='w-60' src={img4} />
          </div>
        </div>

 {/* SECOND-ROW */}
      {/* <div className='container'>  */}
        <div className='row mt-10'>
          <div className='col-lg-6 '>
            <img className='w-60' src={img5} />

          </div>
          <div className='col-lg-6 for-worker-about'>
            <div className='border-top-bottom-yellow width-pad2'>
              <h2 className='for-worker-heading '>Set your own <span className='font-red italic-font'>schedule.</span></h2>
              <ul className='list'>
                <li>Work and earn as much as you want</li>
                <li>Pick up shifts in advance or at the last minute</li>
                <li>Choose hourly or daily jobs near you</li>
              </ul>
            </div>
          </div>
        </div>
      {/* </div> */}

{/* THIRD-ROW */}
        <div className='row mt-10'>
          <div className='col-lg-6 for-worker-about p-0'>
            <div className='border-top-bottom-yellow width-pad2 w-90'>
              
              <h2 className='for-worker-heading'>Unlock rewrds &<span className='font-red italic-font'> opportunities.</span></h2>
              <ul className='list'>
                <li>Achieve 'Top Pro' status to get cash bonuses on select shifts<sup>1</sup></li>
                <li>Get 5% cash back on gas and public transport with the Skill worker card<sup>2</sup></li>
                <li>Unlock more shift opportunities the more you work</li>
              </ul>
              
            </div>
          </div>
          <div className='col-lg-6'>
            <img className='w-60' src={img6} />
          </div>
        </div>



{/* FOURTH-ROW */}
{/* <div className='container'> */}
        <div className='row mt-10'>
          <div className='col-lg-6 '>
            <img className='w-60 ' src={img7}  />

          </div>
          <div className='col-lg-6 for-worker-about '>
            <div className='border-top-bottom-yellow width-pad2'>
              <h2 className='for-worker-heading '>We have you<span className='font-red italic-font'> covered.</span></h2>
              <ul className='list'>
                <li>Detailed shift instructions so you know what to expect</li>
                <li>Occupational accident insurance coverage so you're protected</li>
                <li>In-app support available 7 days a week to help you</li>
              </ul>
            </div>
          </div>
        </div>

        </div>
           {/* </div> */}

        <div className='bg-color mt-6'>
          <div className='container'>
          <h1  className='strugling-header mb-2'>Opportunities in<span className='font-yellow italic-font'> hospitality, warehousing, and more.</span></h1>
          <p className='text-center'>Create an account to see a full list of positions availale in your area.</p>
          </div>
          <div className=' container d-grid positions-grid mt-5'>
<div className='options border-right-bottom-grey'><img src={img8}/><h3>Bartender</h3></div>
<div className='options border-right-bottom-grey'><img src={img9}/><h3>Dishwasher</h3></div>
<div className='options border-right-bottom-grey'><img src={img10}/><h3>Event Server</h3></div>
<div className='options border-bottom-grey'><img src={img11}/><h3>Cook</h3></div>
<div className='options border-right-grey'><img src={img12}/><h3>Concessions</h3></div>
<div className='options border-right-grey'><img src={img13}/><h3>Picker/Packer</h3></div>
<div className='options border-right-grey'><img src={img14}/><h3>Merchandiser</h3></div>
<div className='options '><img src={img15}/><h3>Busser</h3></div>
          </div>
        </div>




<Footer/>

   
    </div>
  )
}

export default Worker
