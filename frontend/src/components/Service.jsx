import React from 'react';
import './Service.css';
import shoe from '../assets/shoe.jpg';
import cloth from '../assets/cloth.jpg';
import eyewear from '../assets/eyewear.jpg';
import cosmetics from '../assets/cosmetics.jpg';

const Service = () => {
  return (
    <div className="serviceContainer">
      <h1>Our Categories</h1>
      <div className="categories">
        <div className="category">
          <img src={shoe} alt="Shoe" />
          <div className="overlay">Shoe</div>
        </div>
        <div className="category">
          <img src={cloth} alt="Cloth" />
          <div className="overlay">Cloth</div>
        </div>
        <div className="category">
          <img src={eyewear} alt="Eyewear" />
          <div className="overlay">Eyewear</div>
        </div>
        <div className="category">
          <img src={cosmetics} alt="Cosmetics" />
          <div className="overlay">Cosmetics</div>
        </div>
        <div className="category">
          <img src={shoe} alt="Shoe" />
          <div className="overlay">Shoe</div>
        </div>
        <div className="category">
          <img src={cloth} alt="Cloth" />
          <div className="overlay">Cloth</div>
        </div>
        <div className="category">
          <img src={eyewear} alt="Eyewear" />
          <div className="overlay">Eyewear</div>
        </div>
        <div className="category">
          <img src={cosmetics} alt="Cosmetics" />
          <div className="overlay">Cosmetics</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
