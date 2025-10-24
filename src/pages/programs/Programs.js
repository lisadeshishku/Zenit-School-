// src/pages/programs/Programs.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import '../../styles/PageHeaders.css';
import '../../styles/Programs.css';

const Programs = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  // Safe arrays from i18n
  const results = t('programsPage.results.items', { returnObjects: true }) || [];
  const activities = t('programsPage.extracurricular.categories', { returnObjects: true }) || [];

  return (
    <div className="programs-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('programsPage.header.title')}</h1>
          <p className="page-subtitle">{t('programsPage.header.subtitle')}</p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <div className="container">
          <div className="overview-grid">
            {/* Elementary */}
            <div className="overview-card" id="elementary">
              <div className="card-header">
                <h3>{t('programsPage.elementary.title')}</h3>
                <span className="age-badge">{t('programsPage.elementary.ages')}</span>
              </div>
              <img
                src={t('programsPage.elementary.image')}
                alt={t('programsPage.elementary.alt')}
              />
              <div className="card-content">
                <p>{t('programsPage.elementary.desc')}</p>
                <ul>
                  {t('programsPage.elementary.points', { returnObjects: true }).map((li, i) => (
                    <li key={i}>✓ {li}</li>
                  ))}
                </ul>
                <div className="program-highlight">
                  <strong>{t('programsPage.elementary.highlight.title')}</strong>{' '}
                  {t('programsPage.elementary.highlight.text')}
                </div>
              </div>
            </div>

            {/* Middle */}
            <div className="overview-card" id="middle">
              <div className="card-header">
                <h3>{t('programsPage.middle.title')}</h3>
                <span className="age-badge">{t('programsPage.middle.ages')}</span>
              </div>
              <img
                src={t('programsPage.middle.image')}
                alt={t('programsPage.middle.alt')}
              />
              <div className="card-content">
                <p>{t('programsPage.middle.desc')}</p>
                <ul>
                  {t('programsPage.middle.points', { returnObjects: true }).map((li, i) => (
                    <li key={i}>✓ {li}</li>
                  ))}
                </ul>
                <div className="program-highlight">
                  <strong>{t('programsPage.middle.highlight.title')}</strong>{' '}
                  {t('programsPage.middle.highlight.text')}
                </div>
              </div>
            </div>

            {/* High */}
            <div className="overview-card" id="high">
              <div className="card-header">
                <h3>{t('programsPage.high.title')}</h3>
                <span className="age-badge">{t('programsPage.high.ages')}</span>
              </div>
              <img
                src={t('programsPage.high.image')}
                alt={t('programsPage.high.alt')}
              />
              <div className="card-content">
                <p>{t('programsPage.high.desc')}</p>
                <ul>
                  {t('programsPage.high.points', { returnObjects: true }).map((li, i) => (
                    <li key={i}>✓ {li}</li>
                  ))}
                </ul>
                <div className="program-highlight">
                  <strong>{t('programsPage.high.highlight.title')}</strong>{' '}
                  {t('programsPage.high.highlight.text')}
                </div>
              </div>
            </div>

            {/* Summer */}
            <div className="overview-card highlight" id="summer">
              <div className="card-header">
                <h3>{t('programsPage.summer.title')}</h3>
                <span className="age-badge">{t('programsPage.summer.ages')}</span>
              </div>
              <img
                src={t('programsPage.summer.image')}
                alt={t('programsPage.summer.alt')}
              />
              <div className="card-content">
                <p>{t('programsPage.summer.desc')}</p>
                <ul>
                  {t('programsPage.summer.points', { returnObjects: true }).map((li, i) => (
                    <li key={i}>✓ {li}</li>
                  ))}
                </ul>
                <div className="program-highlight swimming-focus">
                  <strong>{t('programsPage.summer.highlight.title')}</strong>{' '}
                  {t('programsPage.summer.highlight.text')}
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
              <h2>{t('programsPage.results.title')}</h2>
              <p>{t('programsPage.results.text')}</p>
              <div className="results-grid">
                {results.map((r, i) => (
                  <div className="result-item" key={i}>
                    <span className="result-number">{r.number}</span>
                    <span className="result-label">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="excellence-image">
              <img
                src={t('programsPage.results.image')}
                alt={t('programsPage.results.alt')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="extracurricular-section">
        <div className="container">
          <h2 className="section-title">{t('programsPage.extracurricular.title')}</h2>
          <div className="activities-grid">
            {activities.map((c, i) => (
              <div className="activity-category" key={i}>
                <div className="category-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <ul>
                  {c.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
