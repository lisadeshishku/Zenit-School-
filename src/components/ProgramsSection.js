import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgramCard from './ProgramCard';
import '../styles/ProgramsSection.css';

const ProgramsSection = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: t("programs.elementaryTitle"),
      description: t("programs.elementaryDesc"),
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ages: t("programs.elementaryAges"),
      link: "/programs#elementary"
    },
    {
      title: t("programs.middleTitle"),
      description: t("programs.middleDesc"),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ages: t("programs.middleAges"),
      link: "/programs#middle"
    },
    {
      title: t("programs.highTitle"),
      description: t("programs.highDesc"),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ages: t("programs.highAges"),
      link: "/programs#high"
    },
    {
      title: t("programs.summerTitle"),
      description: t("programs.summerDesc"),
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ages: t("programs.summerAges"),
      link: "/programs#summer"
    }
  ];

  return (
    <section className="programs-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t("programs.title")}</h2>
          <p className="section-subtitle">{t("programs.subtitle")}</p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
