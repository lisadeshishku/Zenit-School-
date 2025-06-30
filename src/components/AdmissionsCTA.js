import React from 'react';
import '../styles/AdmissionsCTA.css';

const AdmissionsCTA = () => {
  const handleApplyNow = () => {
    window.location.href = '/admissions';
  };

  const handleScheduleTour = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="admissions-cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Join Our Community?</h2>
          <p className="cta-subtitle">
            Take the first step towards an exceptional educational journey. 
            Our admissions team is here to guide you through the process.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn-primary" onClick={handleApplyNow}>
              Apply Now
            </button>
            <button className="cta-btn-secondary" onClick={handleScheduleTour}>
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;