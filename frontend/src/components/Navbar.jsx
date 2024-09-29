import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = (props) => {
  const {isLoggedIn} = useAuth();
  return ( 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  {/* <a className="navbar-brand" href="#">E-Commerce</a> */}
  <h1 className='navbar-brand'>E-Commerce</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse ml-400px" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
     
      {isLoggedIn ? <>
      
        <li className="nav-item active">
        <Link className="nav-link" to="/clienthomepage">Home</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="">Products</Link>
      </li>

       <li className="nav-item">
        <Link className="nav-link" to="/logout">logout</Link>
      </li>
      </>
      :<>

        
<li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
      </li>

       <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      </> }

     
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </form> */}
      <button onClick={props.toggleMode} className="btn btn-outline-success my-2 my-sm-0 ml-500">{props.text}</button>
  </div>
</nav>
)
}

export default Navbar