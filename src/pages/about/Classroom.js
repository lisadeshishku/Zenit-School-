import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Classroom.css';

const Classroom = () => {
  const { t } = useTranslation();

  // Safeguard if i18n doesn't return arrays
  const features = t('classroom.features', { returnObjects: true }) || [];

  // Placeholder images (swap later with your own)
  // Tip: put your files in public/classroom/ (all lowercase)
  // and change to src="/classroom/1.jpg", "/classroom/2.jpg", etc.
  const heroImage = 'https://picsum.photos/seed/zenit-classroom-hero/1200/700';
  const galleryImages = [
    'https://picsum.photos/seed/zenit-classroom-1/900/600',
    'https://picsum.photos/seed/zenit-classroom-2/900/600',
    'https://picsum.photos/seed/zenit-classroom-3/900/600',
    'https://picsum.photos/seed/zenit-classroom-4/900/600',
    'https://picsum.photos/seed/zenit-classroom-5/900/600',
    'https://picsum.photos/seed/zenit-classroom-6/900/600',
  ];

  return (
    <div className="classroom-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('classroom.title')}</h1>
          <p className="page-subtitle">{t('classroom.subtitle')}</p>
        </div>
      </section>

      {/* HERO */}
      <section className="classroom-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h2>{t('classroom.hero.title')}</h2>
            <p>{t('classroom.hero.text')}</p>
          </div>
          <div className="hero-image">
            <img
              src={heroImage}
              alt={t('classroom.title')}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://picsum.photos/seed/zenit-classroom-fallback/1200/700';
              }}
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="classroom-gallery">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <div className="gallery-card" key={i}>
                <img
                  src={src}
                  alt={`Classroom view ${i + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://picsum.photos/seed/zenit-classroom-fallback/900/600';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="features-section">
        <div className="container features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Classroom;
