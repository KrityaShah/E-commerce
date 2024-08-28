import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image4 from '../assets/image4.jpg';

const images = [image4, image2, image1];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '80vh',
        marginTop: '40px', 
      }}
    >
      <div style={{ width: '90vw', overflow: 'hidden' }}>
        <img
          className="d-block w-100"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default Carousel;
