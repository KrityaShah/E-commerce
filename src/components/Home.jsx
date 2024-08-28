import React from 'react';
import Carousel from './Carousel';
import "./Home.css"; 

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h1 style={{ marginTop: '150px', fontSize:'4.5rem'}}>Welcome to Ecommerce!</h1>
      <p style={{fontSize:'2.5rem'}}>Shop anywhere, anytime</p>
      <button className="btn btn-outline-success" style={{ margin: '20px' }}>Shop now</button>
      <Carousel />
    </div>
  );
}

export default Home;
