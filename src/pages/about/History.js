import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/History.css';

export default function History() {
  const { t } = useTranslation();
  const timeline = t('history.timeline', { returnObjects: true });

  return (
    <div className="history-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('history.title')}</h1>
          <p className="page-subtitle">{t('history.subtitle')}</p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container timeline">
          {timeline.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="year">{item.year}</div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
