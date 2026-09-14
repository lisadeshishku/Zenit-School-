import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/DigitalEducation.css';

const digitalImages = [
  'https://images.unsplash.com/photo-1581726690015-c9861472ba13?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85'
];

export default function DigitalEducation() {
  const { t } = useTranslation();
  const pillars = t('digitalEducation.pillars', { returnObjects: true }) || [];
  const platforms = t('digitalEducation.platforms', { returnObjects: true }) || [];
  return (
    <div className="digital-page">
      <section className="digital-hero"><div className="digital-hero-image"><img src={digitalImages[0]} alt={t('digitalEducation.title')} /></div><div className="digital-hero-panel"><span className="section-kicker">Learning for tomorrow</span><h1>{t('digitalEducation.title')}</h1><p>{t('digitalEducation.subtitle')}</p></div></section>
      <section className="digital-pillars"><div className="container digital-pillars-grid">
        {Array.isArray(pillars) && pillars.map((pillar, index) => (
          <article className="digital-pillar" key={index}><div className="digital-pillar-image"><img src={digitalImages[(index + 1) % digitalImages.length]} alt={pillar.title} loading="lazy" /></div><div className="digital-pillar-copy"><span>{String(index + 1).padStart(2, '0')}</span><h2>{pillar.title}</h2><p>{pillar.text}</p></div></article>
        ))}
      </div></section>
      <section className="platforms"><div className="container platforms-layout"><div className="platforms-heading"><span className="section-kicker">Tools we use</span><h2>{t('digitalEducation.platformsTitle', { defaultValue: 'A connected learning environment' })}</h2></div><div className="platforms-grid">
        {Array.isArray(platforms) && platforms.map((platform, index) => <article className="platform-card" key={index}><span>{String(index + 1).padStart(2, '0')}</span><h3>{platform.name}</h3><p>{platform.use}</p></article>)}
      </div></div></section>
    </div>
  );
}
