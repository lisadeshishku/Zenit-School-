import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Culture.css';

const Culture = () => {
  const { t } = useTranslation();
  const pillars = t('culture.pillars', { returnObjects: true }) || [];

  const galleryImages = [
    'https://picsum.photos/seed/culture1/900/600',
    'https://picsum.photos/seed/culture2/900/600',
    'https://picsum.photos/seed/culture3/900/600',
  ];

  return (
    <div className="culture-page">
      {/* HEADER */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('culture.title')}</h1>
          <p className="page-subtitle">{t('culture.subtitle')}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="culture-intro">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2>{t('culture.intro.title')}</h2>
            <p>{t('culture.intro.text1')}</p>
            <p>{t('culture.intro.text2')}</p>
          </div>
          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80"
              alt={t('culture.intro.imageAlt')}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars-section">
        <div className="container pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-emoji">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY GALLERY */}
      <section className="culture-gallery">
        <div className="container">
          <h2 className="gallery-title">{t('culture.gallery.title')}</h2>
          <p className="gallery-subtitle">{t('culture.gallery.subtitle')}</p>

          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <div className="gallery-card" key={i}>
                <img
                  src={src}
                  alt={t('culture.gallery.imageAlt', { index: i + 1 })}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="culture-cta">
        <div className="container">
          <h3>{t('culture.cta.title')}</h3>
          <p>{t('culture.cta.text')}</p>
          <a href="/about/activities" className="cta-btn">
            {t('culture.cta.btn')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Culture;
