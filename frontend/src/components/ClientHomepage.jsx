import React from 'react'
import { Link } from 'react-router-dom';
import "./ClientHomepage.css"
import wave from '../assets/wave.svg';
import Navbar2 from './Navbar2';

const ClientHomepage = () => {
  return <>
  <Navbar2/>
    <div className="main-container">
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: "black" }}>
   <h1 style={{ marginTop: '150px', fontSize:'4.5rem'}}>Welcome to Ecommerce!</h1>
   <p style={{fontSize:'2.5rem'}}>New Collection Available</p>
   <Link to=""><button className="btn btn-outline-success">Shop now</button></Link>
    </div>
    </div>
        
        <div className="feature-Products">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: "black" }}>
   <h1 style={{ marginTop: '30px', fontSize:'2.5rem'}}>Featured Product</h1>
    
    <div className="cards">
        <div className="card">
        <p>title</p>
        <p>price</p>
        <p>descrption</p>
        </div>
      
        <div className="card">
        <p>title</p>
        <p>price</p>
        <p>descrption</p>
        </div>

        <div className="card">
        <p>title</p>
        <p>price</p>
        <p>descrption</p>
        </div>

        <div className="card">
        <p>title</p>
        <p>price</p>
        <p>descrption</p>
        </div>

       
    </div>

    </div>
        </div>

  
  </>
}

export default ClientHomepage
