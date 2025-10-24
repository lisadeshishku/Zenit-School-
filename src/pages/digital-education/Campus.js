import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Campus.css';

export default function Campus() {
  const { t } = useTranslation();
  const zones = t('campus.zones', { returnObjects: true }) || [];

  return (
    <div className="campus-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('campus.title')}</h1>
          <p className="page-subtitle">{t('campus.subtitle')}</p>
        </div>
      </section>

      <section className="zones-section">
        <div className="container zones-grid">
          {Array.isArray(zones) && zones.map((z, i) => (
            <div className="zone-card" key={i}>
              <img src={z.image} alt={z.name} />
              <div className="zone-content">
                <h3>{z.name}</h3>
                <p>{z.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
