import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Innovating Tomorrow. <br /> Today.</h1>
        <p>
          At MSL, we design and build smart, secure, and scalable technology to help startups and
          businesses grow faster, work smarter, and stay ahead.
        </p>
        <div className="cta-buttons">
          <a href="#services" className="btn primary">Explore Our Services</a>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}