import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Activities.css';

const Activities = () => {
  const { t } = useTranslation();

  // i18n categories: [{icon, title, items[], (optional) desc}]
  const categories = t('activities.categories', { returnObjects: true }) || [];

  // HERO images (3) — swap with /public paths when ready
  const heroImages = [
    'https://picsum.photos/seed/acts-hero-4/1400/900',
    'https://picsum.photos/seed/acts-hero-2/1400/900',
    'https://picsum.photos/seed/acts-hero-3/1400/900'
  ];

  // Per-card images (fallback rotates through this array)
  const cardImages = [
    'https://picsum.photos/seed/acts-card-1/1200/800',
    'https://picsum.photos/seed/acts-card-2/1200/800',
    'https://picsum.photos/seed/acts-card-3/1200/800',
    'https://picsum.photos/seed/acts-card-4/1200/800',
    'https://picsum.photos/seed/acts-card-5/1200/800'
  ];

  return (
    <div className="activities-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('activities.title')}</h1>
          <p className="page-subtitle">{t('activities.subtitle')}</p>
        </div>
      </section>

      {/* HERO / GALLERY (same grid as Why Zenit) */}
      <section className="activities-hero">
        <div className="container">
          <div className="hero-grid">
            {heroImages.map((src, i) => (
              <div className="hero-img-wrap" key={i}>
                <img
                  src={src}
                  alt={`Activities hero ${i + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://picsum.photos/seed/acts-fallback-hero/1400/900';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES (image cards with emoji badge + list) */}
      <section className="categories-section">
        <div className="container categories-grid">
          {categories.map((c, i) => {
            const img = cardImages[i % cardImages.length];
            return (
              <div key={i} className="category-card">
                <div className="category-media">
                  <img
                    src={img}
                    alt={`${c.title} image`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://picsum.photos/seed/acts-fallback-card/1200/800';
                    }}
                  />
                  {c.icon && <div className="category-emoji" aria-hidden="true">{c.icon}</div>}
                </div>

                <div className="category-content">
                  <h3>{c.title}</h3>
                  {/* Optional description if you add `desc` in i18n */}
                  {c.desc && <p>{c.desc}</p>}

                  {Array.isArray(c.items) && c.items.length > 0 && (
                    <ul className="category-list">
                      {c.items.map((it, j) => <li key={j}>{it}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OPTIONAL: HIGHLIGHTS (copy of Why Zenit KPI style; add i18n if you want) */}
      {/* 
      <section className="activities-highlights">
        <div className="container highlights-grid">
          {[{kpi:'20+',label:'Clubs'}, {kpi:'5',label:'Sports Teams'}, {kpi:'12',label:'Arts Groups'}, {kpi:'100%',label:'Participation'}].map((h, i) => (
            <div className="highlight-item" key={i}>
              <div className="highlight-number">{h.kpi}</div>
              <div className="highlight-label">{h.label}</div>
            </div>
          ))}
        </div>
      </section>
      */}
    </div>
  );
};

export default Activities;
