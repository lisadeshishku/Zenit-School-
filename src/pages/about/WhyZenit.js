import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/WhyZenit.css';

const WhyZenit = () => {
  const { t } = useTranslation();

  // Safeguard arrays from i18n
  const reasons = t('whyZenit.reasons', { returnObjects: true }) || [];
  const highlights = t('whyZenit.highlights', { returnObjects: true }) || [];

  // Placeholder images (swap later with your own)
  // You can also put images in /public/why-zenit/ and use src="/why-zenit/yourfile.jpg"
  const reasonImages = [
    'https://picsum.photos/seed/zenit-reason-1/800/520',
    'https://picsum.photos/seed/zenit-reason-2/800/520',
    'https://picsum.photos/seed/zenit-reason-3/800/520',
    'https://picsum.photos/seed/zenit-reason-4/800/520',
    'https://picsum.photos/seed/zenit-reason-5/800/520',
  ];

  const galleryImages = [
    'https://picsum.photos/seed/zenit-gallery-1/1200/700',
    'https://picsum.photos/seed/zenit-gallery-2/1200/700',
    'https://picsum.photos/seed/zenit-gallery-3/1200/700',
  ];

  return (
    <div className="why-zenit-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('whyZenit.title')}</h1>
          <p className="page-subtitle">{t('whyZenit.subtitle')}</p>
        </div>
      </section>

      {/* Simple Hero/Gallery */}
      <section className="why-zenit-hero">
        <div className="container hero-grid">
          {galleryImages.map((src, i) => (
            <div className="hero-img-wrap" key={i}>
              <img
                src={src}
                alt={`Zenit highlight ${i + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reasons with Image Cards */}
      <section className="reasons-section">
        <div className="container">
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-media">
                  <img
                    src={reasonImages[i % reasonImages.length]}
                    alt={`${r.title} image`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://picsum.photos/seed/zenit-fallback/800/520';
                    }}
                  />
                  <div className="reason-emoji" aria-hidden="true">{r.icon}</div>
                </div>
                <div className="reason-content">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Highlights */}
      <section className="highlights-section">
        <div className="container highlights-grid">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-item">
              <div className="highlight-number">{h.kpi}</div>
              <div className="highlight-label">{h.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyZenit;
