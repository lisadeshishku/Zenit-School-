import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/DigitalEducation.css';

export default function DigitalEducation() {
  const { t } = useTranslation();
  const pillars = t('digitalEducation.pillars', { returnObjects: true }) || [];

  return (
    <div className="digital-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('digitalEducation.title')}</h1>
          <p className="page-subtitle">{t('digitalEducation.subtitle')}</p>
        </div>
      </section>

      <section className="pillars-section">
        <div className="container pillars-grid">
          {Array.isArray(pillars) && pillars.map((p, i) => (
            <div className="pillar-card" key={i}>
              <div className="emoji">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="platforms">
        <div className="container platforms-grid">
          {t('digitalEducation.platforms', { returnObjects: true }).map((x, i) => (
            <div className="platform-card" key={i}>
              <h4>{x.name}</h4>
              <p>{x.use}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
