import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Classroom.css';

const galleryImages = [
  '/insidetheclass/insideclass3304.jpg',
  '/insidetheclass/insideclass341.jpg',
  '/insidetheclass/insideclass3455.jpg',
  '/insidetheclass/insideclass5876.jpg',
  '/insidetheclass/insideclass8665.jpg',
  '/insidetheclass/insideclass9880.jpg'
];

const fallbackImage = 'https://picsum.photos/seed/zenit-classroom-fallback/900/600';

export default function Classroom() {
  const { t } = useTranslation();
  const features = t('classroom.features', { returnObjects: true }) || [];

  const useFallback = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <div className="classroom-page">
      <section className="page-header classroom-header">
        <div className="container">
          <h1 className="page-title">{t('classroom.title')}</h1>
          <p className="page-subtitle">{t('classroom.subtitle')}</p>
        </div>
      </section>

      <section className="classroom-intro">
        <div className="container classroom-intro-grid">
          <div className="classroom-intro-copy">
            <span className="classroom-kicker">Learning at Zenit</span>
            <h2>{t('classroom.hero.title')}</h2>
            <p>{t('classroom.hero.text')}</p>
          </div>
          <div className="classroom-intro-image">
            <img
              src="/insidetheclass/insideclass6820.jpg"
              alt={t('classroom.title')}
              onError={useFallback}
            />
          </div>
        </div>
      </section>

      <section className="classroom-gallery">
        <div className="container">
          <div className="classroom-gallery-heading">
            <span>Inside our classrooms</span>
            <div className="gallery-line" />
          </div>
          <div className="classroom-photo-grid">
            {galleryImages.map((src, index) => (
              <figure className={`classroom-photo classroom-photo-${index + 1}`} key={src}>
                <img src={src} alt={`Classroom view ${index + 1}`} loading="lazy" onError={useFallback} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="classroom-features">
        <div className="container">
          <div className="classroom-features-heading">
            <span className="classroom-kicker">Our approach</span>
            <h2>{t('classroom.featuresTitle', { defaultValue: 'Learning designed around every student' })}</h2>
          </div>
          <div className="classroom-features-grid">
            {Array.isArray(features) && features.map((feature, index) => (
              <article className="classroom-feature" key={index}>
                <span className="feature-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
