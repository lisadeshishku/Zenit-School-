import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Campus.css';

const fallbackImages = [
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85'
];

export default function Campus() {
  const { t } = useTranslation();
  const zones = t('campus.zones', { returnObjects: true }) || [];
  return (
    <div className="campus-page">
      <section className="campus-hero"><img src={fallbackImages[0]} alt={t('campus.title')} /><div className="campus-hero-overlay" /><div className="container campus-hero-copy"><span className="section-kicker">Zenit School</span><h1>{t('campus.title')}</h1><p>{t('campus.subtitle')}</p></div></section>
      <section className="campus-intro"><div className="container"><p>{t('campus.intro', { defaultValue: t('campus.subtitle') })}</p></div></section>
      <section className="zones-section"><div className="container zones-grid">
        {Array.isArray(zones) && zones.map((zone, index) => (
          <article className="zone-row" key={index}><div className="zone-media"><img src={zone.image || fallbackImages[index % fallbackImages.length]} alt={zone.name} loading="lazy" onError={(event) => { event.currentTarget.src = fallbackImages[index % fallbackImages.length]; }} /></div><div className="zone-content"><span>{String(index + 1).padStart(2, '0')}</span><h2>{zone.name}</h2><p>{zone.text}</p></div></article>
        ))}
      </div></section>
    </div>
  );
}
