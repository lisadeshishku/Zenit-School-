import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Director.css';

export default function Director() {
  const { t } = useTranslation();
  const highlights = t('director.highlights', { returnObjects: true });

  return (
    <div className="director-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('director.title')}</h1>
          <p className="page-subtitle">{t('director.subtitle')}</p>
        </div>
      </section>

      <section className="letter-section">
        <div className="container letter-grid">
          <div className="letter-image">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              alt={t('director.name')}
            />
          </div>
          <div className="letter-text">
            <h2>{t('director.greeting')}</h2>
            {t('director.paragraphs', { returnObjects: true }).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="signature">
              <div className="name">{t('director.name')}</div>
              <div className="role">{t('director.role')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="director-highlights">
        <div className="container highlights-grid">
          {highlights.map((h, i) => (
            <div className="highlight-card" key={i}>
              <div className="kpi">{h.kpi}</div>
              <div className="label">{h.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
