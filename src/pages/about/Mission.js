import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Mission.css';

export default function Mission() {
  const { t } = useTranslation();
  const values = t('mission.values', { returnObjects: true });

  return (
    <div className="mission-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('mission.title')}</h1>
          <p className="page-subtitle">{t('mission.subtitle')}</p>
        </div>
      </section>

      <section className="mv-section">
        <div className="container mv-grid">
          <div className="mv-card">
            <h2>{t('mission.missionTitle')}</h2>
            <p>{t('mission.missionText')}</p>
          </div>
          <div className="mv-card">
            <h2>{t('mission.visionTitle')}</h2>
            <p>{t('mission.visionText')}</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="emoji">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
