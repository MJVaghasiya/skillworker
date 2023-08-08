import React, { useState } from 'react';
import img1 from '../assets/businessTab1.webp'

const Test = () => {
  const [imageSrc, setImageSrc] = useState('businessTab1.webp');

  const toggleImage = () => {
    setImageSrc((prevSrc) => 
      prevSrc === 'businessTab1.webp' ? 'image2.jpg' : 'businessTab1.webp'
    );
  };

  return (
    <ul>
      <li onClick={toggleImage}>
        <img
          src={imageSrc}
          alt="Image"
          width="200"
          height="200"
        />
      </li>
    </ul>
  );
};

export default Test;
