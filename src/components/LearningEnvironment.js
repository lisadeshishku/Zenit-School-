import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LearningEnvironment.css';

const LearningEnvironment = () => {
  const { t } = useTranslation();

  const features = ['classroom', 'practice', 'technology', 'pool'];

  return (
    <section className="learning-environment">
      <div className="container">
        <div className="learning-content">
          <div className="learning-image">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
              alt={t('home.learning.imageAlt')}
            />
          </div>

          <div className="learning-text">
            <p className="section-kicker">{t('home.learning.kicker')}</p>
            <h2>{t('home.learning.title')}</h2>
            <p>{t('home.learning.description')}</p>

            <div className="learning-features">
              {features.map((feature) => (
                <div className="feature-item" key={feature}>
                  <div className="feature-dot" aria-hidden="true" />
                  <div className="feature-content">
                    <h3>{t(`home.learning.features.${feature}.title`)}</h3>
                    <p>{t(`home.learning.features.${feature}.text`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningEnvironment;
