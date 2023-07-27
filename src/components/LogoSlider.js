import React, { useEffect, useRef } from 'react';

const LogoSlider = ({ logos }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderWidth = slider.scrollWidth;

    const animate = () => {
      slider.scrollLeft += 1; // Adjust this value to control the scroll speed

      if (slider.scrollLeft >= sliderWidth) {
        slider.scrollLeft = 0;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Pause the animation when the mouse is over the slider
    slider.addEventListener('mouseover', () => {
      cancelAnimationFrame(animationId);
    });

    // Resume the animation when the mouse leaves the slider
    slider.addEventListener('mouseout', () => {
      requestAnimationFrame(animate);
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
  
      <div className="slider" ref={sliderRef}>
        {logos.map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
        {/* Duplicate the logos to ensure smooth continuous scrolling */}
        {logos.map((logo, index) => (
          <div className="slide" key={index + logos.length}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
  
  );
};

export default LogoSlider;
