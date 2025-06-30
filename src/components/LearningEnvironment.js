// components/LearningEnvironment.js - Updated with better styling
import React from 'react';
import '../styles/LearningEnvironment.css';

const LearningEnvironment = () => {
  return (
    <section className="learning-environment">
      <div className="container">
        <div className="learning-content">
          <div className="learning-image">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern campus with students"
            />
          </div>
          <div className="learning-text">
            <h2>State-of-the-Art Learning Environment</h2>
            <p>
              Our campus is thoughtfully designed to inspire learning at every corner. From cutting-edge 
              science laboratories to our half Olympic pool, every space is crafted to enhance the 
              educational experience and foster innovation.
            </p>
            <div className="learning-features">
              <div className="feature-item">
                <div className="feature-dot"></div>
                <div className="feature-content">
                  <h4>Modern Classrooms</h4>
                  <p>Interactive technology and flexible learning spaces designed for collaboration</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <div className="feature-content">
                  <h4>Half Olympic Pool</h4>
                  <p>Professional swimming facility for competitive training and recreational activities</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <div className="feature-content">
                  <h4>Research Facilities</h4>
                  <p>Advanced labs for scientific discovery and hands-on experimentation</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <div className="feature-content">
                  <h4>Creative Studios</h4>
                  <p>Inspiring spaces for arts, music, theater, and digital media production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningEnvironment;