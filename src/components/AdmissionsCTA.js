import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdmissionsCTA.css';

const AdmissionsCTA = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    // Open Google Form in new tab
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeGmeV2aKE8Wi8fHLksaDj4WIs1p22gn4rLtSFBLnUtag9bCw/viewform?pli=1', '_blank');
  };

  const handleScheduleTour = () => {
    // Navigate to contact page
    navigate('/contact');
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