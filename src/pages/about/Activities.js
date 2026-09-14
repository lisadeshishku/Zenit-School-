import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Activities.css';

const images = [
  'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1500&q=85',
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=85'
];

export default function Activities() {
  const { t } = useTranslation();
  const categories = t('activities.categories', { returnObjects: true }) || [];
  return (
    <div className="activities-page">
      <section className="activities-header"><div className="container activities-header-grid">
        <div><span className="section-kicker">Beyond the classroom</span><h1>{t('activities.title')}</h1><p>{t('activities.subtitle')}</p></div>
        <div className="activities-header-image"><img src={images[0]} alt={t('activities.title')} /></div>
      </div></section>
      <section className="activities-collage"><div className="container collage-grid">
        <img src={images[1]} alt="Creative activities" loading="lazy" /><img src={images[2]} alt="Student activities" loading="lazy" />
      </div></section>
      <section className="categories-section"><div className="container categories-grid">
        {Array.isArray(categories) && categories.map((category, index) => (
          <article className="category-card" key={index}>
            <div className="category-media"><img src={images[(index + 1) % images.length]} alt={category.title} loading="lazy" /></div>
            <div className="category-content"><span className="category-number">{String(index + 1).padStart(2, '0')}</span><h2>{category.title}</h2>{category.desc && <p>{category.desc}</p>}
              {Array.isArray(category.items) && <ul>{category.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>}
            </div>
          </article>
        ))}
      </div></section>
    </div>
  );
}
