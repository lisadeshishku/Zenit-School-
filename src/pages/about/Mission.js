import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Mission.css';

const missionImage = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=85';
const visionImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85';

export default function Mission() {
  const { t } = useTranslation();
  const values = t('mission.values', { returnObjects: true }) || [];
  return (
    <div className="mission-page">
      <section className="mission-hero">
        <img src={missionImage} alt={t('mission.title')} />
        <div className="mission-hero-overlay" />
        <div className="container mission-hero-content">
          <span className="mission-kicker">Zenit School</span>
          <h1>{t('mission.title')}</h1>
          <p>{t('mission.subtitle')}</p>
        </div>
      </section>
      <section className="mission-statements">
        <div className="container statement-grid">
          <article className="statement statement-primary"><span>01</span><h2>{t('mission.missionTitle')}</h2><p>{t('mission.missionText')}</p></article>
          <div className="statement-image"><img src={visionImage} alt={t('mission.visionTitle')} loading="lazy" /></div>
          <article className="statement statement-secondary"><span>02</span><h2>{t('mission.visionTitle')}</h2><p>{t('mission.visionText')}</p></article>
        </div>
      </section>
      <section className="mission-values">
        <div className="container">
          <div className="values-heading"><span className="section-kicker">Zenit School</span><h2>{t('mission.valuesTitle', { defaultValue: 'Our values' })}</h2></div>
          <div className="values-grid">
            {Array.isArray(values) && values.map((value, index) => (
              <article className="value-card" key={index}><span className="value-number">{String(index + 1).padStart(2, '0')}</span><h3>{value.title}</h3><p>{value.text}</p></article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
