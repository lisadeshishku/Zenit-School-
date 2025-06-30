import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Cultivating Excellence Since 1985</h2>
            <p className="about-description">
              Zenit School stands as a beacon of educational excellence, where innovation meets tradition. 
              Our commitment to holistic education ensures that every student develops not just academically, 
              but as a confident, creative, and compassionate global citizen.
            </p>
            <p className="about-description">
              With campuses designed to inspire learning and a curriculum that bridges disciplines, 
              we prepare students for the challenges and opportunities of tomorrow while fostering 
              a lifelong love of learning.
            </p>
            
            <div className="facilities-highlight">
              <h3>🏊‍♀️ World-Class Facilities</h3>
              <p>Our campus features state-of-the-art learning spaces, including a half Olympic pool for aquatic programs and competitive swimming.</p>
            </div>
            
            <button className="about-cta-btn" onClick={() => window.location.href = '/about'}>
              Learn More About Our Mission
            </button>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Students in classroom"
            />
            <div className="experience-badge">
              <span className="badge-number">40+</span>
              <span className="badge-text">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
