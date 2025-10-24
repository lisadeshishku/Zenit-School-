// pages/About.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PageHeaders.css';
import '../styles/About.css';

const About = () => {
  const { t } = useTranslation();

  const timeline   = t('aboutPage.history.timeline',   { returnObjects: true }) || [];
  const paras      = t('aboutPage.history.paragraphs', { returnObjects: true }) || [];
  const values     = t('aboutPage.values.items',       { returnObjects: true }) || [];
  const facilities = t('aboutPage.campus.facilities',  { returnObjects: true }) || [];
  const stats      = t('aboutPage.faculty.stats',      { returnObjects: true }) || [];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('aboutPage.title')}</h1>
          <p className="page-subtitle">{t('aboutPage.subtitle')}</p>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <h2>{t('aboutPage.history.heading')}</h2>
              {paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="history-timeline">
              {timeline.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3>{t('aboutPage.mv.missionTitle')}</h3>
              <p>{t('aboutPage.mv.missionText')}</p>
            </div>
            <div className="vision-card">
              <h3>{t('aboutPage.mv.visionTitle')}</h3>
              <p>{t('aboutPage.mv.visionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h3 className="mission-title">{t('aboutPage.values.title')}</h3>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-item" key={i}>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty & Staff */}
      <section className="faculty-section">
        <div className="container">
          <div className="faculty-content">
            <div className="faculty-text">
              <h2>{t('aboutPage.faculty.title')}</h2>
              <p>{t('aboutPage.faculty.text')}</p>
              <div className="faculty-stats">
                {stats.map((s, i) => (
                  <div className="stat" key={i}>
                    <span className="stat-number">{s.number}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="faculty-image">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt={t('aboutPage.faculty.imageAlt')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="campus-life-section">
        <div className="container">
          <h3 className="mission-title">{t('aboutPage.campus.title')}</h3>
          <div className="facilities-grid">
            {facilities.map((f, i) => (
              <div className="facility-card" key={i}>
                <img src={f.image} alt={f.alt} />
                <div className="facility-content">
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
