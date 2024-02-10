import React from 'react';
import "./NavbarTop.scss";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';



const NavbarTop=()=> {
  return (
   
<nav className="navbar navbar-expand-lg navbar-light bg-light Navbar">
  <div className="container">
    <Link className="navbar-brand" to="/">
     <h2>Hekto</h2>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 Links">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Pages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/productdetails">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blogpage">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/shoplist">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
      </ul>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
       <div className='iconDiv'> <FaSearch/></div>
        
              </form>
    </div>
  </div>
</nav>


  );
}

export default NavbarTop;
