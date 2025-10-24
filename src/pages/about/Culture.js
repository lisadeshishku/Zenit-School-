import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Culture.css';

const Culture = () => {
  const { t } = useTranslation();

  return (
    <div className="culture-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('culture.title')}</h1>
          <p className="page-subtitle">{t('culture.subtitle')}</p>
        </div>
      </section>

      <section className="pillars-section">
        <div className="container pillars-grid">
          {t('culture.pillars', { returnObjects: true }).map((p, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-emoji">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-culture">
        <div className="container text-center">
          <h2>{t('culture.cta.title')}</h2>
          <p>{t('culture.cta.text')}</p>
          <a href="/community/volunteer" className="cta-btn">{t('culture.cta.btn')}</a>
        </div>
      </section>
    </div>
  );
};

export default Culture;
