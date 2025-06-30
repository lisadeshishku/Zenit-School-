// components/StatsSection.js
import React from 'react';
import { Users, Globe, BookOpen, Award } from 'lucide-react';
import '../styles/StatsSection.css';

const StatsSection = () => {
  const stats = [
    { number: "450", label: "Students", icon: Users },
    { number: "35", label: "Countries Represented", icon: Globe },
    { number: "8:1", label: "Student to Teacher Ratio", icon: BookOpen },
    { number: "98%", label: "University Acceptance", icon: Award }
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