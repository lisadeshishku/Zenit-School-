import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import '../../styles/News.css';

const News = () => {
  const { t, i18n } = useTranslation();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const isEnglish = i18n.language.startsWith('en');

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setErrorMessage('');

      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) {
        setErrorMessage(
          isEnglish
            ? 'The news could not be loaded.'
            : 'Lajmet nuk mund të ngarkoheshin.'
        );
      } else {
        setPosts(data || []);
      }

      setLoading(false);
    };

    loadNews();
  }, [isEnglish]);

  const getTitle = (post) => {
    if (isEnglish) {
      return post.title_en || post.title_sq;
    }

    return post.title_sq;
  };

  const getSummary = (post) => {
    if (isEnglish) {
      return post.summary_en || post.summary_sq;
    }

    return post.summary_sq;
  };

  const formatDate = (date) => {
    if (!date) {
      return '';
    }

    return new Intl.DateTimeFormat(
      isEnglish ? 'en-GB' : 'sq-AL',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
    ).format(new Date(date));
  };

  return (
    <div className="news-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('news.title')}</h1>
          <p className="page-subtitle">{t('news.subtitle')}</p>
        </div>
      </section>

      <section className="news-grid-section">
        <div className="container">
          {loading && (
            <p className="news-state">
              {isEnglish
                ? 'Loading news...'
                : 'Duke i ngarkuar lajmet...'}
            </p>
          )}

          {errorMessage && (
            <p className="news-state news-error">
              {errorMessage}
            </p>
          )}

          {!loading && !errorMessage && posts.length === 0 && (
            <p className="news-state">
              {isEnglish
                ? 'There are no published news articles yet.'
                : 'Ende nuk ka lajme të publikuara.'}
            </p>
          )}

          {!loading && posts.length > 0 && (
            <div className="news-grid">
              {posts.map((post) => (
                <article key={post.id} className="news-card">
                  <Link
                    to={`/about/news/${post.slug}`}
                    className="news-image-link"
                  >
                    {post.cover_image_url ? (
                      <img
                        src={post.cover_image_url}
                        alt={getTitle(post)}
                      />
                    ) : (
                      <div className="news-image-placeholder">
                        Zenit School
                      </div>
                    )}
                  </Link>

                  <div className="news-content">
                    <div className="news-meta">
                      {formatDate(
                        post.published_at || post.created_at
                      )}
                    </div>

                    <h2>{getTitle(post)}</h2>

                    {getSummary(post) && (
                      <p>{getSummary(post)}</p>
                    )}

                    <Link
                      to={`/about/news/${post.slug}`}
                      className="read-more"
                    >
                      {t('news.readMore')} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;