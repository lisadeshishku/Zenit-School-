import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/WhyZenit.css';

const WhyZenit = () => {
  const { t } = useTranslation();
  return (
    <div className="why-zenit-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('whyZenit.title')}</h1>
          <p className="page-subtitle">{t('whyZenit.subtitle')}</p>
        </div>
      </section>

      <section className="reasons-section">
        <div className="container">
          <div className="reasons-grid">
            {t('whyZenit.reasons', { returnObjects: true }).map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-emoji">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="container highlights-grid">
          {t('whyZenit.highlights', { returnObjects: true }).map((h, i) => (
            <div key={i} className="highlight-item">
              <div className="highlight-number">{h.kpi}</div>
              <div className="highlight-label">{h.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyZenit;
