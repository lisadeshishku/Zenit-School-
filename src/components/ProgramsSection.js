import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgramCard from './ProgramCard';

const ProgramsSection = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: t('programs.elementaryTitle'),
      description: t('programs.elementaryDesc'),
      image:
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ages: t('programs.elementaryAges'),
      link: '/programs#elementary',
    },
    {
      title: t('programs.middleTitle'),
      description: t('programs.middleDesc'),
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ages: t('programs.middleAges'),
      link: '/programs#middle',
    },
    {
      title: t('programs.highTitle'),
      description: t('programs.highDesc'),
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ages: t('programs.highAges'),
      link: '/programs#high',
    },
    {
      title: t('programs.summerTitle'),
      description: t('programs.summerDesc'),
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      ages: t('programs.summerAges'),
      link: '/programs#summer',
    },
  ];

  return (
    <section
      className="programs-section"
      role="region"
      aria-labelledby="programs-title"
      style={{ padding: '5rem 0', background: 'white' }}
    >
      <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1rem' }}>
        {/* Use a real header element with its own block formatting context */}
        <header
          className="programs-header"
          style={{
            textAlign: 'center',
            margin: '0 auto 40px auto',
            maxWidth: 900,
            position: 'relative',
            zIndex: 2,
            contain: 'content', // prevents children from affecting outside flow
          }}
        >
          <h2
            id="programs-title"
            className="programs-title"
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#111827',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            {t('programs.title')}
          </h2>
          <p
            className="programs-subtitle"
            style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}
          >
            {t('programs.subtitle')}
          </p>
        </header>

        {/* Explicit grid container with strong defaults */}
        <div
          className="programs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
            position: 'relative',
            zIndex: 1,
            marginTop: 0,
          }}
        >
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
