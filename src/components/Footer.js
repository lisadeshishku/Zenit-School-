import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">ZENIT SCHOOL</div>
            <p className="footer-description">
              Inspiring excellence in education and preparing students for a dynamic future.
              Featuring world-class facilities including a half Olympic pool.
            </p>
            <div className="social-links">
              <a href="https://instagram.com/zenitschool" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/zenitschool" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="link-list">
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/programs" className="footer-link">Programs</Link></li>
              <li><Link to="/admissions" className="footer-link">Admissions</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Programs</h4>
            <ul className="link-list">
              <li><Link to="/programs#elementary" className="footer-link">Elementary School</Link></li>
              <li><Link to="/programs#middle" className="footer-link">Middle School</Link></li>
              <li><Link to="/programs#high" className="footer-link">High School</Link></li>
              <li><Link to="/programs#summer" className="footer-link">Zenit Summer Camp</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Connect</h4>
            <div className="contact-info">
              <p>📍 123 Education Boulevard</p>
              <p>Academic Heights, AH 12345</p>
              <p>
                <Phone size={16} style={{display: 'inline', marginRight: '8px'}} />
                <a href="tel:+15551234567" className="footer-link">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <Mail size={16} style={{display: 'inline', marginRight: '8px'}} />
                <a href="mailto:info@zenitschool.edu" className="footer-link">
                  info@zenitschool.edu
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Zenit School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;