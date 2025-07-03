import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/AdmissionsCTA.css';

const AdmissionsCTA = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleApplyNow = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeGmeV2aKE8Wi8fHLksaDj4WIs1p22gn4rLtSFBLnUtag9bCw/viewform?pli=1', '_blank');
  };

  const handleScheduleTour = () => {
    navigate('/contact');
  };

  return (
    <section className="admissions-cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{t("admissionsCTA.title")}</h2>
          <p className="cta-subtitle">{t("admissionsCTA.subtitle")}</p>
          <div className="cta-buttons">
            <button className="cta-btn-primary" onClick={handleApplyNow}>
              {t("admissionsCTA.apply")}
            </button>
            <button className="cta-btn-secondary" onClick={handleScheduleTour}>
              {t("admissionsCTA.visit")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;
