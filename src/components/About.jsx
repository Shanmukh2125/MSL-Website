import React from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-text">
          <h2>About MSL</h2>
          <p>
            MSL is a tech startup driven by innovation and built on trust. We partner with
            businesses to create solutions that are not only functional but also future-ready.
            Whether you're building a product from scratch or optimizing existing systems, we bring
            the tools, talent, and thinking to make it happen.
          </p>
        </div>
        <ul className="features">
          <li>✅ Modern & Secure Technologies</li>
          <li>✅ Fast, Scalable Development</li>
          <li>✅ Transparent Communication</li>
          <li>✅ Data Privacy & Security Focus</li>
          <li>✅ Remote-Friendly & Global Reach</li>
        </ul>
      </div>
    </section>
  );
}
