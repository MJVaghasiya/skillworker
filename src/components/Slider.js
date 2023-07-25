import React, { useState, useEffect } from 'react';

const LogoSlider = ({ logos, interval }) => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [logos.length, interval]);

  return (
    <div className="logo-slider">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index}`}
          className={index === currentLogoIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default LogoSlider;
