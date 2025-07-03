// pages/About.js - Unique About Page (NO duplicate content from homepage)
import React from 'react';
import '../styles/PageHeaders.css';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Zenit School</h1>
          <p className="page-subtitle">
            Discover our rich history, educational philosophy, and commitment to excellence that has shaped generations of leaders.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <h2>Our Story Since 1985</h2>
              <p>
                Zenit School was founded with a vision to create an educational institution that would prepare students 
                not just for academic success, but for leadership in an ever-changing world. From our humble beginnings 
                with 50 students, we have grown into a premier educational institution serving 450 students from 35 countries.
              </p>
              <p>
                Our founders believed in the power of combining rigorous academics with character development, 
                a philosophy that continues to guide our mission today. The addition of our half Olympic pool in 1995 
                marked our commitment to physical wellness and competitive excellence.
              </p>
            </div>
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-year">1985</div>
                <div className="timeline-content">
                  <h4>School Founded</h4>
                  <p>Zenit School opens its doors with 50 students and a vision for excellence.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">1995</div>
                <div className="timeline-content">
                  <h4>Olympic Pool Added</h4>
                  <p>Half Olympic pool constructed, establishing our aquatic program.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2005</div>
                <div className="timeline-content">
                  <h4>International Recognition</h4>
                  <p>Achieved international accreditation and expanded global partnerships.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h4>40 Years Strong</h4>
                  <p>Celebrating four decades of educational excellence and innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
<section className="mission-vision-section">
  <div className="container">
    <div className="mission-vision-grid">
      <div className="mission-card">
        <h3>Our Mission</h3>
        <p>
          To provide an exceptional educational experience that nurtures intellectual curiosity, 
          develops character, and prepares students to be thoughtful, engaged citizens of the world.
        </p>
      </div>
      <div className="vision-card">
        <h3>Our Vision</h3>
        <p>
          To be a leading educational institution that inspires students to reach their full potential 
          and make meaningful contributions to society through innovation, collaboration, and service.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Values Section */}
<section className="values-section">
  <div className="container">
    <h3 className="mission-title">Our Core Values</h3>
    <div className="values-grid">
      <div className="value-item">
        <h4>Academic Excellence</h4>
        <p>We maintain the highest standards of learning and intellectual growth.</p>
      </div>
      <div className="value-item">
        <h4>Character Development</h4>
        <p>We foster integrity, empathy, and ethical leadership in all our students.</p>
      </div>
      <div className="value-item">
        <h4>Global Citizenship</h4>
        <p>We prepare students to thrive in an interconnected, diverse world.</p>
      </div>
      <div className="value-item">
        <h4>Holistic Wellness</h4>
        <p>We promote physical, mental, and emotional well-being through our programs.</p>
      </div>
    </div>
  </div>
</section>

      {/* Faculty & Staff */}
      <section className="faculty-section">
        <div className="container">
          <div className="faculty-content">
            <div className="faculty-text">
              <h2>Exceptional Faculty & Staff</h2>
              <p>
                Our dedicated team of 56 faculty members brings together expertise from around the globe. 
                With advanced degrees from prestigious universities and years of experience in their fields, 
                our teachers are committed to inspiring and challenging every student.
              </p>
              <div className="faculty-stats">
                <div className="stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Hold Advanced Degrees</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Average Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Countries Represented</span>
                </div>
              </div>
            </div>
            <div className="faculty-image">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Faculty and students" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="campus-life-section">
        <div className="container">
          <h3 className="mission-title">Campus Life & Facilities</h3>
          <div className="facilities-grid">
            <div className="facility-card">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern classrooms" 
              />
              <div className="facility-content">
                <h4>Modern Learning Spaces</h4>
                <p>State-of-the-art classrooms equipped with the latest technology for interactive learning.</p>
              </div>
            </div>
            <div className="facility-card">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Swimming pool" 
              />
              <div className="facility-content">
                <h4>Half Olympic Pool</h4>
                <p>Professional swimming facility for competitive training, lessons, and recreational activities.</p>
              </div>
            </div>
            <div className="facility-card">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Library" 
              />
              <div className="facility-content">
                <h4>Research Library</h4>
                <p>Extensive collection of books, digital resources, and quiet study spaces for research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;