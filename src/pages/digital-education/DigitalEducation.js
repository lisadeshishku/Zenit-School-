import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/DigitalEducation.css';

const heroImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85';
const pillarImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
];
const platformLogos = {
  'Google Workspace': '/images/platforms/google-workspace.png',
  'Google Cloud': '/images/platforms/google-cloud.png',
  'PowerSchool SIS': '/images/platforms/powerschool.png',
  'Code.org': '/images/platforms/code-org.png',
  'Financial Times': '/images/platforms/financial-times.png',
};

export default function DigitalEducation() {
  const { t } = useTranslation();
  const pillars = t('digitalEducation.pillars', { returnObjects: true }) || [];
  const platforms = t('digitalEducation.platforms', { returnObjects: true }) || [];

  return (
    <div className="digital-page">
      <section className="digital-hero">
        <div className="digital-hero-image"><img src={heroImage} alt={t('digitalEducation.heroImageAlt')} /></div>
        <div className="digital-hero-panel">
          <span className="section-kicker">{t('digitalEducation.kicker')}</span>
          <h1>{t('digitalEducation.title')}</h1>
          <p>{t('digitalEducation.subtitle')}</p>
        </div>
      </section>

      <section className="digital-pillars">
        <div className="container digital-pillars-grid">
          {Array.isArray(pillars) && pillars.map((pillar, index) => (
            <article className="digital-pillar" key={index}>
              <div className="digital-pillar-image"><img src={pillarImages[index % pillarImages.length]} alt={pillar.title} loading="lazy" /></div>
              <div className="digital-pillar-copy">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{pillar.title}</h2>
                <p>{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="platforms">
        <div className="container platforms-layout">
          <div className="platforms-heading">
            <span className="section-kicker">{t('digitalEducation.platformsKicker')}</span>
            <h2>{t('digitalEducation.platformsTitle')}</h2>
            <p>{t('digitalEducation.platformsSubtitle')}</p>
          </div>
          <div className="platforms-grid">
            {Array.isArray(platforms) && platforms.map((platform, index) => (
              <article className="platform-card" key={index}>
                <div
                    className={`digital-platform-logo ${
                      platform.name === 'Google Workspace'
                        ? 'digital-platform-logo--google-workspace'
                        : ''
                    }`}
                  >
                    <img
                      src={platformLogos[platform.name]}
                      alt={`${platform.name} logo`}
                      loading="lazy"
                    />
                  </div>
                <h3>{platform.name}</h3>
                <p>{platform.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
