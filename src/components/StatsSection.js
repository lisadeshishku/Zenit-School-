import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Globe, BookOpen, Award } from 'lucide-react';
import '../styles/StatsSection.css';

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "450", label: t("stats.students"), icon: Users },
    { number: "35", label: t("stats.countries"), icon: Globe },
    { number: "8:1", label: t("stats.ratio"), icon: BookOpen },
    { number: "98%", label: t("stats.acceptance"), icon: Award }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <IconComponent />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
