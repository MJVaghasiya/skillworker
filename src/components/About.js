import React, { Component } from "react";
import img1 from '../assets/about-1.png'

import logo1 from '../assets/logo-1.jpg'
import logo2 from '../assets/logo-2.jpg'
import logo3 from '../assets/logo-3.jpg'
import logo4 from '../assets/logo-4.jpg'
import logo5 from '../assets/logo-5.jpg'
import logo6 from '../assets/logo-6.jpg'
import logo7 from '../assets/logo-7.jpg'
import logo8 from '../assets/logo-8.jpg'
import logo9 from '../assets/logo-9.jpg'

import LogoSlider from './LogoSlider';



const About = () => {

   
    const logos = [logo1, logo2, logo3,logo4,logo5,logo6,logo7,logo8,logo9]; // Add more logo URLs as needed

    return (
        <div>
            <div className='container overflow-hidden'>
                <div className='row height-350 height mt-5'>
                    <div className='col-lg-6'>
                        <div className="width-500">
                        <h1 >Skill Worker providing high quality care visits at home</h1>
                        <p >Our services support you to maintain your chosen lifestyle.  So, we keep you in control and provide you with the home care and support that you want, where and when you want it.</p>
                        <a href='#' className='about-us-link' >Find out more about us</a>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-15'>
                        <img src={img1} className='w-100 h-70' />
                        <h2 className='our-motto' >Care that keeps you safe at home </h2>
                    </div>
                </div>
                </div>
                {/* INFINITY SLIDER */}
                <div className="padding-top text-center overflow-hidden">
                <h2>Trusted by thousands of small and large businesses</h2>
           
            <div className="mt-6">

                <LogoSlider logos={logos}  />
                </div>
                </div>
          
        </div>
    );
}


export default About
