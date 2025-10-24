import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/News.css';

const News = () => {
  const { t } = useTranslation();
  const posts = t('news.posts', { returnObjects: true });

  return (
    <div className="news-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('news.title')}</h1>
          <p className="page-subtitle">{t('news.subtitle')}</p>
        </div>
      </section>

      <section className="news-grid-section">
        <div className="container news-grid">
          {posts.map((p, i) => (
            <article key={i} className="news-card">
              <img src={p.image} alt={p.title} />
              <div className="news-content">
                <div className="news-meta">{p.date} • {p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <a href="#" className="read-more">{t('news.readMore')}</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
