import React from 'react';
import Carousel from './Carousel';
import Service from './Service';
import "./Home.css"; 
import { Link } from 'react-router-dom';
import Enquiry from './Enquiry';
import Footer from './Footer';
import Signup from './Signup';
import ClientHomepage from './ClientHomepage';


const Home = () => {
  return <>
  
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h1 style={{ marginTop: '150px', fontSize:'4.5rem'}}>Welcome to Ecommerce!</h1>
      <p style={{fontSize:'2.5rem'}}>Shop anywhere, anytime</p>
      <Link to="/signup"><button className="btn btn-outline-success" style={{ margin: '20px' }}>Shop now</button></Link>
      <Carousel />
      <Service/>
      <Enquiry/>
      <Footer/>
    </div>
  
    </>
}

export default Home;
