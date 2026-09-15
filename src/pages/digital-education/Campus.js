import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Campus.css';

const fallbackImages = [
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1400&q=85',
];

const campusImages = [
  '/images/campus/school-campus.jpg',
  '/images/campus/subject-classrooms.jpg',
  '/images/campus/technology-lab.jpg',
  '/images/campus/sports-centre.jpg',
  '/images/campus/half-olympic-pool.jpg',
];

export default function Campus() {
  const { t } = useTranslation();

  const spaces =
    t('campus.spaces', { returnObjects: true }) || [];

  const handleImageError = (event, index) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src =
      fallbackImages[index % fallbackImages.length];
  };

  return (
    <div className="campus-page">
      <section className="campus-showcase">
        <div className="campus-showcase-copy">
          <span className="section-kicker">
            {t('campus.kicker')}
          </span>

          <h1>{t('campus.title')}</h1>
          <p>{t('campus.subtitle')}</p>
        </div>

        <div className="campus-showcase-image">
          <img
            src={campusImages[0]}
            alt={t('campus.heroImageAlt')}
            onError={(event) => handleImageError(event, 0)}
          />
        </div>
      </section>

      <section className="campus-statement">
        <div className="container campus-statement-inner">
          <span>{t('campus.statementKicker')}</span>
          <p>{t('campus.intro')}</p>
        </div>
      </section>

      <section className="campus-spaces">
        <div className="container">
          <div className="campus-spaces-heading">
            <span className="section-kicker">
              {t('campus.spacesKicker')}
            </span>

            <h2>{t('campus.spacesTitle')}</h2>
          </div>

          <div className="campus-bento-grid">
            {Array.isArray(spaces) &&
              spaces.map((space, index) => (
                <article
                  className={`campus-space campus-space-${index + 1}`}
                  key={index}
                >
                  <img
                    src={campusImages[index]}
                    alt={space.title}
                    loading="lazy"
                    onError={(event) =>
                      handleImageError(event, index)
                    }
                  />

                  <div className="campus-space-overlay" />

                  <div className="campus-space-copy">
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3>{space.title}</h3>
                    <p>{space.text}</p>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}