import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Activities.css';

const Activities = () => {
  const { t } = useTranslation();
  const categories = t('activities.categories', { returnObjects: true });

  return (
    <div className="activities-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('activities.title')}</h1>
          <p className="page-subtitle">{t('activities.subtitle')}</p>
        </div>
      </section>

      <section className="categories-section">
        <div className="container categories-grid">
          {categories.map((c, i) => (
            <div key={i} className="category-card">
              <div className="category-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((item, j) => <li key={j}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;
