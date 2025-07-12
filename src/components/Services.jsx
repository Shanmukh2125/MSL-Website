import React from 'react';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>What We Do</h2>
        <p>Our core services are designed to transform your ideas into powerful digital solutions.</p>
        <div className="service-grid">
          <div className="card">
            <h3>Custom Software Development</h3>
            <p>We build tailored web and mobile applications that align with your business goals.</p>
          </div>
          <div className="card">
            <h3>Mobile App Development</h3>
            <p>From idea to launch, we develop intuitive, high-performance mobile applications.</p>
          </div>
          <div className="card">
            <h3>Cloud Solutions</h3>
            <p>From migration to optimization, we help you harness the full power of the cloud.</p>
          </div>
          <div className="card">
            <h3>AI & Automation</h3>
            <p>Integrate smart automation into your workflow using the latest AI tools and strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
