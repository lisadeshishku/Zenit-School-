import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import '../../styles/News.css';

const NewsArticle = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const isEnglish = i18n.language.startsWith('en');

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error || !data) {
        setErrorMessage(
          isEnglish
            ? 'This article could not be found.'
            : 'Ky lajm nuk u gjet.'
        );
      } else {
        setArticle(data);
      }

      setLoading(false);
    };

    loadArticle();
  }, [slug, isEnglish]);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat(
      isEnglish ? 'en-GB' : 'sq-AL',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
    ).format(new Date(date));
  };

  if (loading) {
    return (
      <main className="news-article-state">
        <p>
          {isEnglish
            ? 'Loading article...'
            : 'Duke e ngarkuar lajmin...'}
        </p>
      </main>
    );
  }

  if (errorMessage) {
    return (
      <main className="news-article-state">
        <h1>{errorMessage}</h1>

        <Link to="/about/news" className="read-more">
          ← {isEnglish ? 'Back to news' : 'Kthehu te lajmet'}
        </Link>
      </main>
    );
  }

  const title = isEnglish
    ? article.title_en || article.title_sq
    : article.title_sq;

  const content = isEnglish
    ? article.content_en || article.content_sq
    : article.content_sq;

  return (
    <article className="news-article-page">
      <div className="news-article-container">
        <Link to="/about/news" className="news-back-link">
          ← {isEnglish ? 'Back to news' : 'Kthehu te lajmet'}
        </Link>

        <p className="news-article-date">
          {formatDate(
            article.published_at || article.created_at
          )}
        </p>

        <h1>{title}</h1>

        {article.cover_image_url && (
          <img
            src={article.cover_image_url}
            alt={title}
            className="news-article-image"
          />
        )}

        <div className="news-article-body">
          {content}
        </div>
      </div>
    </article>
  );
};

export default NewsArticle;