import React from 'react'
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';


const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={image4} alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={image2} alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={image3} alt="Third slide"/>
      </div>
    </div>
  </div>
  )
}

export default Carousel
