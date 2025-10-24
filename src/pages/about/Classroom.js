import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Classroom.css';

const Classroom = () => {
  const { t } = useTranslation();
  const features = t('classroom.features', { returnObjects: true });

  return (
    <div className="classroom-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('classroom.title')}</h1>
          <p className="page-subtitle">{t('classroom.subtitle')}</p>
        </div>
      </section>

      <section className="classroom-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h2>{t('classroom.hero.title')}</h2>
            <p>{t('classroom.hero.text')}</p>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              alt={t('classroom.title')}
            />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Classroom;
