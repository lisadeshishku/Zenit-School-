import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p className="section-kicker">{t('home.about.kicker')}</p>
            <h2 className="about-title">{t('home.about.title')}</h2>
            <p className="about-description">{t('home.about.paragraph1')}</p>
            <p className="about-description">{t('home.about.paragraph2')}</p>

            <div className="facilities-highlight">
              <h3>{t('home.about.highlightTitle')}</h3>
              <p>{t('home.about.highlightText')}</p>
            </div>

            <button className="about-cta-btn" onClick={() => navigate('/about')}>
              {t('home.about.cta')}
            </button>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
              alt={t('home.about.imageAlt')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
