import React, { Component } from "react";
import img1 from '../assets/about-1.png'



const About = () => {

    return (
        <div>
            <div className='container overflow-hidden'>
                <div className='row height-350 height mt-5'>
                    <div className='col-lg-6 pad-60-60 '>
                        <h1 >Skill Worker providing high quality care visits at home</h1>
                        <p >Our services support you to maintain your chosen lifestyle. So, we keep you in control and provide you with the home care and support that you want, where and when you want it.</p>
                        <a href='#' className='about-us-link' >Find out more about us</a>
                    </div>
                    <div className='col-lg-6 mt-15'>
                        <img src={img1} className='w-100 h-70' />
                        <h2 className='our-motto' >Care that keeps you safe at home </h2>
                    </div>
                </div>

                {/* INFINITY SLIDER */}

            </div>
        </div>
    );
}


export default About
