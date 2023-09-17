import React, {useState} from 'react';
import Slider from 'react-infinite-logo-slider'


import logo1 from '../assets/logo-1.jpg'
import logo2 from '../assets/logo-2.jpg'
import logo3 from '../assets/logo-3.jpg'
import logo4 from '../assets/logo-4.jpg'
import logo5 from '../assets/logo-5.jpg'
import logo6 from '../assets/logo-6.jpg'
import logo7 from '../assets/logo-7.jpg'
import logo8 from '../assets/logo-8.jpg'
import logo9 from '../assets/logo-9.jpg'


const Logo = () => {

  return (
    <div className="logo-slider">
                <h2 className='text-center mb-5'>Trusted by thousands of small and large businesses</h2>

     <Slider
            
            duration={40}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={logo1} alt="any" className='h-12' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo2} alt="any2" className='h-12' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo3} alt="any3" className='h-12' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo4} alt="any3" className='h-12' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo5} alt="any3" className='h-12' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo6} alt="any3" className='h-12' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo7} alt="any3" className='h-12' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo8} alt="any3" className='h-12' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo9} alt="any3" className='h-12' />
            </Slider.Slide>
          
        </Slider>
    </div>
  );
};

export default Logo;
