import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LearningEnvironment.css';

const LearningEnvironment = () => {
  const { t } = useTranslation();

  return (
    <section className="learning-environment">
      <div className="container">
        <div className="learning-content">
          <div className="learning-image">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern campus with students"
            />
          </div>
          <div className="learning-text">
            <h2>{t('learning.title')}</h2>
            <p>{t('learning.desc')}</p>
            <div className="learning-features">
              <div className="feature-item">
                <div className="feature-dot"></div>
                <div className="feature-content">
                  <h4>{t('learning.modernClassrooms')}</h4>
                  <p>{t('learning.modernClassroomsDesc')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <div className="feature-content">
                  <h4>{t('learning.pool')}</h4>
                  <p>{t('learning.poolDesc')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <div className="feature-content">
                  <h4>{t('learning.research')}</h4>
                  <p>{t('learning.researchDesc')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <div className="feature-content">
                  <h4>{t('learning.creative')}</h4>
                  <p>{t('learning.creativeDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningEnvironment;
