import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Staff.css';

export default function Staff() {
  const { t } = useTranslation();
  const faculty = t('staff.members', { returnObjects: true });

  return (
    <div className="staff-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('staff.title')}</h1>
          <p className="page-subtitle">{t('staff.subtitle')}</p>
        </div>
      </section>

      <section className="staff-grid-section">
        <div className="container staff-grid">
          {faculty.map((m, i) => (
            <article className="staff-card" key={i}>
              <img src={m.photo} alt={m.name} />
              <div className="staff-info">
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p className="bio">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
