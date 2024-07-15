import React from 'react';
import './Nav.css';
import Logo from './Logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src={Logo} alt="Logo" className="logo-icon" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
      <button className="button">Sign in</button>
      <div className='mobile-menu'>
        <a className="fas fa-bars hamburger-icon">Ξ</a>
      </div>
    </nav>
  );
}

export default Navbar;
