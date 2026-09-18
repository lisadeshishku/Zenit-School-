import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Culture.css';

const cultureImages = [
  {
    src: '/images/culture/culture-community.jpg',
    position: 'center 45%',
  },
  {
    src: '/images/culture/culture shared projects.jpg',
    position: 'center 60%',
  },
  {
    src: '/images/culture/culture-family-participation.jpg',
    position: 'center 70%',
  },
  {
    src: '/images/culture/culture-friendship.jpg',
    position: 'center 60%',
  },
];

export default function Culture() {
  const { t } = useTranslation();
  const pillars = t('culture.pillars', { returnObjects: true }) || [];

  return (
    <div className="culture-page">
      <section className="page-header culture-header">
        <div className="container">
          <h1 className="page-title">{t('culture.title')}</h1>
          <p className="page-subtitle">{t('culture.subtitle')}</p>
        </div>
      </section>

      <section className="culture-intro">
        <div className="container culture-intro-grid">
          <div className="culture-intro-image">
            <img
              src={cultureImages[0].src}
              alt={t('culture.intro.imageAlt')}
              style={{ objectPosition: cultureImages[0].position }}
            />
          </div>
          <div className="culture-intro-copy">
            <span className="section-kicker">{t('culture.intro.kicker')}</span>
            <h2>{t('culture.intro.title')}</h2>
            <p>{t('culture.intro.text1')}</p>
            <p>{t('culture.intro.text2')}</p>
          </div>
        </div>
      </section>

      <section className="culture-pillars">
        <div className="container culture-pillars-grid">
          {Array.isArray(pillars) && pillars.map((pillar, index) => (
            <article className="culture-pillar" key={index}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="culture-gallery">
        <div className="container">
          <div className="culture-gallery-heading">
            <div>
              <span className="section-kicker">{t('culture.gallery.kicker')}</span>
              <h2>{t('culture.gallery.title')}</h2>
            </div>
            <p>{t('culture.gallery.subtitle')}</p>
          </div>
          <div className="culture-photo-grid">
            {cultureImages.slice(1).map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={t('culture.gallery.imageAlt', { index: index + 1 })}
                loading="lazy"
                style={{ objectPosition: image.position }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="culture-cta">
        <div className="container culture-cta-inner">
          <div>
            <h2>{t('culture.cta.title')}</h2>
            <p>{t('culture.cta.text')}</p>
          </div>
          <a href="/about/activities" className="cta-btn">
            {t('culture.cta.btn')}
          </a>
        </div>
      </section>
    </div>
  );
}
