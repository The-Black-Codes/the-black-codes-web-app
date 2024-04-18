import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container flex justify-evenly p-1 mt-12">
      <div>
        <a href="#home">Home</a>
      </div>
      <div>
        <a href="#about-us">About</a>
      </div>
      <div>
        <a href="#contact-us">Contact Us</a>
      </div>
      <div>
        <a href="#donate">Donate</a>
      </div>
    </div>
  );
};

export default Navbar;
