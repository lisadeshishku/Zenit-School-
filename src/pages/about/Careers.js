import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Careers.css';

export default function Careers() {
  const { t } = useTranslation();
  const jobs = t('careers.jobs', { returnObjects: true });

  return (
    <div className="careers-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('careers.title')}</h1>
          <p className="page-subtitle">{t('careers.subtitle')}</p>
        </div>
      </section>

      <section className="jobs-section">
        <div className="container jobs-list">
          {jobs.map((j, i) => (
            <div className="job-card" key={i}>
              <div className="job-head">
                <h3>{j.title}</h3>
                <span className="badge">{j.type}</span>
              </div>
              <p className="job-meta">{j.location} • {j.department}</p>
              <ul className="job-reqs">
                {j.requirements.map((r, k) => <li key={k}> {r}</li>)}
              </ul>
              <a className="apply-btn" href={j.applyUrl} target="_blank" rel="noreferrer">
                {t('careers.apply')}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="how-to-apply">
        <div className="container">
          <h2>{t('careers.how.title')}</h2>
          <p>{t('careers.how.text')}</p>
          <a className="email-link" href="mailto:careers@zenitschool.edu">hr@zenitschool.org</a>
        </div>
      </section>
    </div>
  );
}
