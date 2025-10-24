// Replace your Contact.js with this version that has inline styles
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Inline styles for social icons (this will override any CSS)
  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#374151',
    color: '#9ca3af',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: 'translateY(0)'
  };

  const socialLinkHoverStyle = {
    ...socialLinkStyle,
    backgroundColor: '#2563eb',
    color: 'white',
    transform: 'translateY(-2px)'
  };

  const socialLinksContainerStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Reach out to Zenit School for more information about our programs, admissions, 
            summer camp, or to schedule a campus visit including a tour of our half Olympic pool.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <h3>Visit Us</h3>
              <p>
                123 Education Boulevard<br />
                Academic Heights, AH 12345<br />
                United States
              </p>
              <p className="facility-note">🏊‍♀️ Half Olympic pool on campus</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <h3>Call Us</h3>
              <p>
                Main: +1 (555) 123-4567<br />
                Admissions: +1 (555) 123-4568<br />
                Summer Camp: +1 (555) 123-4569
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <h3>Email Us</h3>
              <p>
                info@zenitschool.edu<br />
                admissions@zenitschool.edu<br />
                summercamp@zenitschool.edu
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock />
              </div>
              <h3>Office Hours</h3>
              <p>
                Monday - Friday<br />
                8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="summer-camp">Zenit Summer Camp</option>
                    <option value="visit">Campus Visit</option>
                    <option value="swimming">Swimming Program</option>
                    <option value="financial">Financial Aid</option>
                    <option value="general">General Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="submit-btn">
                <Send className="btn-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Information Section */}
      <section className="quick-info-section">
        <div className="container">
          <div className="quick-info-grid">
            <div className="info-card">
              <h4>🏊 Swimming Facilities</h4>
              <p>Visit our half Olympic pool - perfect for competitive swimming, lessons, and summer camp activities.</p>
            </div>
            <div className="info-card">
              <h4>🚗 Parking</h4>
              <p>Free parking available on campus for all visitors and families.</p>
            </div>
            <div className="info-card">
              <h4>♿ Accessibility</h4>
              <p>All facilities are wheelchair accessible with accommodations available.</p>
            </div>
            <div className="info-card">
              <h4>🌐 Languages</h4>
              <p>Translation services available upon request for non-English speaking families.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;