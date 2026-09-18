import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Director.css';

export default function Director() {
  const { t } = useTranslation();

  const paragraphsRaw = t('director.paragraphs', { returnObjects: true });
  const paragraphs = Array.isArray(paragraphsRaw)
    ? paragraphsRaw
    : (paragraphsRaw ? [paragraphsRaw] : []);

  const highlightsRaw = t('director.highlights', { returnObjects: true });
  const highlights = Array.isArray(highlightsRaw) ? highlightsRaw : [];

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
              src="/images/Director/Director.jpeg"
              alt={t('director.name')}
              className="director-photo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://via.placeholder.com/900x600?text=Director+Image';
              }}
            />
          </div>

          <div className="letter-text">
            <h2>{t('director.greeting')}</h2>

            {paragraphs.length > 0 ? (
              paragraphs.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p />
            )}

            <div className="signature">
              <div className="name">{t('director.name')}</div>
              <div className="role">{t('director.role')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="director-highlights">
        <div className="container highlights-grid">
          {highlights.length > 0 ? (
            highlights.map((h, i) => (
              <div className="highlight-card" key={i}>
                <div className="kpi">{h.kpi}</div>
                <div className="label">{h.label}</div>
              </div>
            ))
          ) : (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                color: '#6b7280'
              }}
            />
          )}
        </div>
      </section>
    </div>
  );
}
