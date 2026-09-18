import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/PageHeaders.css';
import '../../styles/Activities.css';

const images = {
 
  hero: '/images/activities/activities-hero.jpg',

 

  categories: [
    {
      src: '/images/activities/activities-leadership.jpg',
      position: 'center 38%',
    },
    {
      src: '/images/activities/activities-science.jpg',
      position: 'center 42%',
    },
    {
      src: '/images/activities/activities-music.jpg',
      position: 'center 42%',
    },
    {
      src: '/images/activities/activities-swimming.jpg',
      position: 'center 38%',
    },
    {
      src: '/images/activities/activities-events.jpg',
      position: 'center 35%',
    },
  ],
};

export default function Activities() {
  const { t } = useTranslation();
  const categories = t('activities.categories', { returnObjects: true }) || [];

  return (
    <div className="activities-page">
      <section className="page-header activities-header">
        <div className="container activities-header-grid">
          <div>
            <span className="section-kicker">{t('activities.kicker')}</span>
            <h1>{t('activities.title')}</h1>
            <p>{t('activities.subtitle')}</p>
          </div>
          <div className="activities-header-image">
            <img
              src={images.hero}
              alt={t('activities.title')}
              className="activities-image activities-image--hero"
            />
          </div>
        </div>
      </section>


      <section className="categories-section">
        <div className="container categories-grid">
          {Array.isArray(categories) && categories.map((category, index) => (
            <article className="category-card" key={index}>
              <div className="category-media">
                <img
                  src={images.categories[index]?.src}
                  alt={category.title}
                  loading="lazy"
                  style={{
                    objectPosition: images.categories[index]?.position || 'center',
                  }}
                />
              </div>
              <div className="category-content">
                <span className="category-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2>{category.title}</h2>
                {category.desc && <p>{category.desc}</p>}
                {Array.isArray(category.items) && (
                  <ul>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
