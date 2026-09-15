import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgramCard from './ProgramCard';
import '../styles/ProgramsSection.css';

const ProgramsSection = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: t('home.programs.primary.title'),
      description: t('home.programs.primary.description'),
      level: t('home.programs.primary.level'),
      imageAlt: t('home.programs.primary.imageAlt'),
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&q=80',
      link: '/programs#elementary',
    },
    {
      title: t('home.programs.lowerSecondary.title'),
      description: t('home.programs.lowerSecondary.description'),
      level: t('home.programs.lowerSecondary.level'),
      imageAlt: t('home.programs.lowerSecondary.imageAlt'),
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
      link: '/programs#middle',
    },
    {
      title: t('home.programs.upperSecondary.title'),
      description: t('home.programs.upperSecondary.description'),
      level: t('home.programs.upperSecondary.level'),
      imageAlt: t('home.programs.upperSecondary.imageAlt'),
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
      link: '/programs#high',
    },
    {
      title: t('home.programs.summer.title'),
      description: t('home.programs.summer.description'),
      level: t('home.programs.summer.level'),
      imageAlt: t('home.programs.summer.imageAlt'),
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
      link: '/programs#summer',
    },
  ];

  return (
    <section className="programs-section" aria-labelledby="home-programs-title">
      <div className="container">
        <div className="section-header home-programs-header">
          <h2 id="home-programs-title" className="section-title">{t('home.programs.title')}</h2>
          <p className="section-subtitle">{t('home.programs.subtitle')}</p>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              program={program}
              learnMoreLabel={t('home.programs.learnMore')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
