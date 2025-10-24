import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Scholarships.css';

export default function Scholarships() {
  const { t } = useTranslation();
  const programs = t('scholarships.programs', { returnObjects: true }) || [];

  return (
    <div className="scholarships-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('scholarships.title')}</h1>
          <p className="page-subtitle">{t('scholarships.subtitle')}</p>
        </div>
      </section>

      <section className="scholarship-list">
        <div className="container scholarships-grid">
          {Array.isArray(programs) && programs.map((s, i) => (
            <article className="scholarship-card" key={i}>
              <h3>{s.name}</h3>
              <p className="sch-meta">{s.eligibility}</p>
              <ul className="sch-points">
                {s.benefits.map((b, j) => <li key={j}>• {b}</li>)}
              </ul>
              <a className="apply-btn" href={s.applyUrl} target="_blank" rel="noreferrer">
                {t('scholarships.apply')}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="sch-faq">
        <div className="container">
          <h2>{t('scholarships.faq.title')}</h2>
          <ul className="faq-list">
            {t('scholarships.faq.items', { returnObjects: true }).map((f, k) => (
              <li key={k}><strong>{f.q}</strong><br />{f.a}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
