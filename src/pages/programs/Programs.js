// pages/Programs.js - Unique Programs Page (Different from homepage)
import React, { useEffect } from 'react';
import '../../styles/PageHeaders.css';
import '../../styles/Programs.css';
import { useLocation } from 'react-router-dom';

const Programs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // 👈 This ensures it re-runs even if you're already on /programs


  return (
    <div className="programs-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Programs</h1>
          <p className="page-subtitle">
            Comprehensive educational programs designed to challenge, inspire, and prepare students for success.
            From elementary through high school, plus our exciting Zenit Summer Camp.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-card" id="elementary">
              <div className="card-header">
                <h3>Elementary School</h3>
                <span className="age-badge">Ages 5-11</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Elementary students" 
              />
              <div className="card-content">
                <p>Foundation years focused on creativity, exploration, and fundamental skills development.</p>
                <ul>
                  <li>✓ Small class sizes (12-15 students)</li>
                  <li>✓ Integrated STEAM curriculum</li>
                  <li>✓ Swimming lessons in our half Olympic pool</li>
                  <li>✓ Art, music, and physical education</li>
                  <li>✓ Character development programs</li>
                  <li>✓ Field trips and hands-on learning</li>
                </ul>
                <div className="program-highlight">
                  <strong>Swimming Program:</strong> All elementary students receive weekly swimming instruction in our half Olympic pool, focusing on water safety and basic stroke development.
                </div>
              </div>
            </div>

            <div className="overview-card" id="middle">
              <div className="card-header">
                <h3>Middle School</h3>
                <span className="age-badge">Ages 11-14</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Middle school students" 
              />
              <div className="card-content">
                <p>Transitional years emphasizing critical thinking, collaboration, and personal growth.</p>
                <ul>
                  <li>✓ Advanced academic courses</li>
                  <li>✓ Leadership development programs</li>
                  <li>✓ Competitive swimming team</li>
                  <li>✓ Student clubs and organizations</li>
                  <li>✓ Community service projects</li>
                  <li>✓ Technology integration</li>
                </ul>
                <div className="program-highlight">
                  <strong>Competitive Swimming:</strong> Students can join our competitive swim team, training in our half Olympic pool for regional and national competitions.
                </div>
              </div>
            </div>

            <div className="overview-card" id="high">
              <div className="card-header">
                <h3>High School</h3>
                <span className="age-badge">Ages 14-18</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="High school students" 
              />
              <div className="card-content">
                <p>Advanced preparation for university with rigorous academics and leadership opportunities.</p>
                <ul>
                  <li>✓ Advanced Placement (AP) courses</li>
                  <li>✓ International Baccalaureate (IB) program</li>
                  <li>✓ Elite swimming program</li>
                  <li>✓ University counseling</li>
                  <li>✓ Study abroad opportunities</li>
                  <li>✓ Research projects and internships</li>
                </ul>
                <div className="program-highlight">
                  <strong>Elite Swimming:</strong> Our high school swimmers compete at state and national levels, with several alumni receiving college scholarships.
                </div>
              </div>
            </div>

            <div className="overview-card highlight" id="summer">
              <div className="card-header">
                <h3>🏊‍♀️ Zenit Summer Camp</h3>
                <span className="age-badge">Ages 6-16</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Summer camp activities" 
              />
              <div className="card-content">
                <p>An exciting summer program featuring our half Olympic pool and enriching activities.</p>
                <ul>
                  <li>✓ Daily swimming instruction and pool activities</li>
                  <li>✓ Water safety and lifeguard training</li>
                  <li>✓ Arts and crafts workshops</li>
                  <li>✓ STEM camps and coding</li>
                  <li>✓ Sports and outdoor adventures</li>
                  <li>✓ Field trips and cultural experiences</li>
                </ul>
                <div className="program-highlight swimming-focus">
                  <strong>🏊‍♀️ Swimming Excellence:</strong> Our half Olympic pool is the centerpiece of summer camp, offering everything from beginner lessons to competitive training camps.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="academic-excellence">
        <div className="container">
          <div className="excellence-content">
            <div className="excellence-text">
              <h2>Academic Excellence & Results</h2>
              <p>
                Our rigorous academic programs consistently produce outstanding results. 
                With a 98% university acceptance rate and graduates attending top institutions worldwide, 
                our students are well-prepared for success.
              </p>
              <div className="results-grid">
                <div className="result-item">
                  <span className="result-number">98%</span>
                  <span className="result-label">University Acceptance</span>
                </div>
                <div className="result-item">
                  <span className="result-number">85%</span>
                  <span className="result-label">Honor Roll Students</span>
                </div>
                <div className="result-item">
                  <span className="result-number">42</span>
                  <span className="result-label">AP Courses Offered</span>
                </div>
                <div className="result-item">
                  <span className="result-number">15</span>
                  <span className="result-label">Swimming Records Held</span>
                </div>
              </div>
            </div>
            <div className="excellence-image">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students celebrating success" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="extracurricular-section">
        <div className="container">
          <h2 className="section-title">Beyond the Classroom</h2>
          <div className="activities-grid">
            <div className="activity-category">
              <div className="category-icon">🏊‍♀️</div>
              <h4>Aquatic Programs</h4>
              <ul>
                <li>Competitive Swimming Team</li>
                <li>Water Polo</li>
                <li>Synchronized Swimming</li>
                <li>Lifeguard Certification</li>
                <li>Aqua Fitness Classes</li>
              </ul>
            </div>
            <div className="activity-category">
              <div className="category-icon">🎨</div>
              <h4>Arts & Culture</h4>
              <ul>
                <li>Visual Arts Studio</li>
                <li>Theater Productions</li>
                <li>Music Ensembles</li>
                <li>Digital Media</li>
                <li>Creative Writing</li>
              </ul>
            </div>
            <div className="activity-category">
              <div className="category-icon">🔬</div>
              <h4>STEM Clubs</h4>
              <ul>
                <li>Robotics Team</li>
                <li>Science Olympiad</li>
                <li>Coding Club</li>
                <li>Math Competition</li>
                <li>Environmental Club</li>
              </ul>
            </div>
            <div className="activity-category">
              <div className="category-icon">🌍</div>
              <h4>Global Engagement</h4>
              <ul>
                <li>Model United Nations</li>
                <li>Language Clubs</li>
                <li>Cultural Exchange</li>
                <li>International Service</li>
                <li>Study Abroad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;