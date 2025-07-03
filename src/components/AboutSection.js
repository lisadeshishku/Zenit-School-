import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ADD THIS
import '../styles/AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ADD THIS

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">{t("aboutSection.title")}</h2>
            <p className="about-description">
              {t("aboutSection.desc1")}
            </p>
            <p className="about-description">
              {t("aboutSection.desc2")}
            </p>
            
            <div className="facilities-highlight">
              <h3>🏊‍♀️ {t("aboutSection.facilities")}</h3>
              <p>{t("aboutSection.facilitiesDesc")}</p>
            </div>
            
            <button className="about-cta-btn" onClick={handleLearnMore}>
              {t("aboutSection.cta")}
            </button>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt={t("aboutSection.title")}
            />
            <div className="experience-badge">
              <span className="badge-number">40+</span>
              <span className="badge-text">{t("aboutSection.years")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
