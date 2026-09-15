import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Code2, Waves, GraduationCap } from 'lucide-react';
import '../styles/StatsSection.css';

const StatsSection = () => {
  const { t } = useTranslation();

  const strengths = [
    { title: t('home.strengths.academics.title'), text: t('home.strengths.academics.text'), icon: BookOpen },
    { title: t('home.strengths.technology.title'), text: t('home.strengths.technology.text'), icon: Code2 },
    { title: t('home.strengths.swimming.title'), text: t('home.strengths.swimming.text'), icon: Waves },
    { title: t('home.strengths.support.title'), text: t('home.strengths.support.text'), icon: GraduationCap },
  ];

  return (
    <section className="stats-section" aria-label={t('home.strengths.ariaLabel')}>
      <div className="container">
        <div className="stats-grid">
          {strengths.map(({ title, text, icon: Icon }) => (
            <article key={title} className="stat-item">
              <div className="stat-icon" aria-hidden="true"><Icon /></div>
              <h2 className="stat-number">{title}</h2>
              <p className="stat-label">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
