import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import '../../styles/Careers.css';

export default function Careers() {
  const { t, i18n } = useTranslation();

  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const isEnglish = i18n.language?.startsWith('en');

  useEffect(() => {
    const loadVacancies = async () => {
      setLoading(true);
      setErrorMessage('');

      const { data, error } = await supabase
        .from('vacancies')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Vacancy loading error:', error);
        setErrorMessage(
          isEnglish
            ? 'Vacancies could not be loaded.'
            : 'Vendet e punës nuk mund të ngarkoheshin.'
        );
      } else {
        setVacancies(data || []);
      }

      setLoading(false);
    };

    loadVacancies();
  }, [isEnglish]);

  const getText = (item, englishField, albanianField) => {
    if (isEnglish) {
      return item[englishField] || item[albanianField] || '';
    }

    return item[albanianField] || item[englishField] || '';
  };

  const formatDeadline = (deadline) => {
    if (!deadline) {
      return '';
    }

    return new Date(`${deadline}T00:00:00`).toLocaleDateString(
      isEnglish ? 'en-GB' : 'sq-AL',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
    );
  };

  return (
    <div className="careers-page careers-page-spacing">
      <section className="jobs-section">
        <div className="container">
          {loading && (
            <p className="careers-status">
              {isEnglish
                ? 'Loading vacancies...'
                : 'Duke i ngarkuar vendet e punës...'}
            </p>
          )}

          {!loading && errorMessage && (
            <p className="careers-error">{errorMessage}</p>
          )}

          {!loading &&
            !errorMessage &&
            vacancies.length === 0 && (
              <div className="jobs-list">
                <div className="job-card">
                  <div className="job-head">
                    <h3>{t('careers.noOpenings.title')}</h3>
                  </div>

                  <p className="job-meta">
                    {t('careers.noOpenings.text')}
                  </p>
                </div>
              </div>
            )}

          {!loading && vacancies.length > 0 && (
            <div className="jobs-list">
              {vacancies.map((vacancy) => {
                const title = getText(
                  vacancy,
                  'title_en',
                  'title_sq'
                );

                const description = getText(
                  vacancy,
                  'description_en',
                  'description_sq'
                );

                const requirements = getText(
                  vacancy,
                  'requirements_en',
                  'requirements_sq'
                );

                const employmentType = getText(
                  vacancy,
                  'employment_type_en',
                  'employment_type_sq'
                );

                return (
                  <article
                    className="job-card"
                    key={vacancy.id}
                  >
                    <div className="job-head">
                      <h3>{title}</h3>

                      {employmentType && (
                        <span className="badge">
                          {employmentType}
                        </span>
                      )}
                    </div>

                    {(vacancy.location ||
                      vacancy.deadline) && (
                      <div className="job-details">
                        {vacancy.location && (
                          <span>
                            📍 {vacancy.location}
                          </span>
                        )}

                        {vacancy.deadline && (
                          <span>
                            {isEnglish
                              ? 'Application deadline:'
                              : 'Afati i aplikimit:'}{' '}
                            {formatDeadline(
                              vacancy.deadline
                            )}
                          </span>
                        )}
                      </div>
                    )}

                    <p className="job-description">
                      {description}
                    </p>

                    {requirements && (
                      <div className="job-requirements">
                        <h4>
                          {isEnglish
                            ? 'Requirements'
                            : 'Kërkesat'}
                        </h4>

                        <p>{requirements}</p>
                      </div>
                    )}

                    {vacancy.application_email && (
                      <a
                        className="apply-btn"
                        href={`mailto:${vacancy.application_email}?subject=${encodeURIComponent(
                          `${isEnglish ? 'Application' : 'Aplikim'} – ${title}`
                        )}`}
                      >
                        {isEnglish
                          ? 'Apply now'
                          : 'Apliko tani'}
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="how-to-apply">
        <div className="container">
          <h2>{t('careers.how.title')}</h2>
          <p>{t('careers.how.text')}</p>
        </div>
      </section>
    </div>
  );
}