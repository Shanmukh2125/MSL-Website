import React from 'react';
import logo from '/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">
          <img src={logo} alt="MSL Logo" className="logo-img" />
          <span>MSL</span>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}