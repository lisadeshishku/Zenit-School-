import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../../styles/Scholarships.css';

export default function Scholarships() {
  const { t } = useTranslation();
  const programs = t('scholarships.programs', { returnObjects: true }) || [];

  // Fallback images if your i18n items don't include s.image
  const fallbackImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
  ];

  return (
    <div className="scholarships-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('scholarships.title')}</h1>
          <p className="page-subtitle">{t('scholarships.subtitle')}</p>
        </div>
      </section>

      <section className="scholarship-list">
        <div className="container scholarships-grid">
          {Array.isArray(programs) && programs.map((s, i) => {
            const img = s.image || fallbackImages[i % fallbackImages.length];
            return (
              <article className="scholarship-card" key={i}>
                <div className="sch-media" aria-hidden="true">
                  <img
                    src={img}
                    alt={s.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackImages[0];
                    }}
                  />
                </div>

                <div className="sch-content">
                  <h3 className="sch-title">{s.name}</h3>
                  <p className="sch-meta">{s.eligibility}</p>
                  <ul className="sch-points">
                    {(s.benefits || []).map((b, j) => <li key={j}>✓ {b}</li>)}
                  </ul>

                  {/* Send users to the Contact page form */}
                  <Link className="apply-btn" to="/contact#contact-form">
                    {t('scholarships.apply')}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="sch-faq">
        <div className="container">
          <h2>{t('scholarships.faq.title')}</h2>
          <ul className="faq-list">
            {t('scholarships.faq.items', { returnObjects: true }).map((f, k) => (
              <li key={k}><strong>{f.q}</strong><br />{f.a}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
