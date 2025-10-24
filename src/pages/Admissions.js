// src/pages/Admissions.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import AdmissionsCTA from '../components/AdmissionsCTA';
import '../styles/PageHeaders.css';

const Admissions = () => {
  const { t } = useTranslation();

  return (
    <div className="admissions-page">
      {/* Page Header (unified design) */}
      <section className="page-header admissions-header">
        <div className="container">
          <h1 className="page-title">{t('admissionsPage.title')}</h1>
          <p className="page-subtitle">{t('admissionsPage.subtitle')}</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <AdmissionsCTA />
    </div>
  );
};

export default Admissions;
