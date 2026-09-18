// src/pages/why/WhyZenit.js
import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/WhyZenit.css";

const WhyZenit = () => {
  const { t } = useTranslation();

  const introParas = t("whyZenit.intro.paragraphs", { returnObjects: true }) || [];
  const reasons    = t("whyZenit.reasons",          { returnObjects: true }) || [];
  const approach   = t("whyZenit.approach.steps",   { returnObjects: true }) || [];
  const highlights = t("whyZenit.highlights",       { returnObjects: true }) || [];


  return (
    <div className="why-zenit-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t("whyZenit.title")}</h1>
          <p className="page-subtitle">{t("whyZenit.subtitle")}</p>
        </div>
      </section>

      {/* Intro with image on side */}
      <section className="wz-section with-image">
        <div className="container">
          <div className="wz-flex">
            <div className="wz-text wz-lead">
              {introParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <figure className="wz-side-image">
            <img
              src="/images/why-zenit/why-zenit-community.jpg"
              alt={t('whyZenit.images.community')}
              style={{ objectPosition: 'center 50%' }}
            />
            </figure>
          </div>
        </div>
      </section>

      {/* Pillars / Reasons with side image */}
      <section className="wz-section with-image">
        <div className="container">
          <div className="wz-flex reverse">
            <div className="wz-text">
              <h2 className="wz-h2">{t("whyZenit.pillarsTitle")}</h2>
              <div className="wz-pillars-stack">
                {reasons.map((r, i) => (
                  <article className="wz-pillar" key={i}>
                    {r.icon && <div className="wz-pillar-eyebrow">{r.icon}</div>}
                    <h3 className="wz-pillar-title">{r.title}</h3>
                    <p className="wz-pillar-text">{r.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <figure className="wz-side-image">
              <img
                src="/images/why-zenit/why-zenit-practical-learning.jpg"
                alt={t('whyZenit.images.practicalLearning')}
                style={{ objectPosition: 'center 48%' }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Approach with image side-by-side */}
      <section className="wz-section with-image">
        <div className="container">
          <div className="wz-flex">
            <div className="wz-text">
              <h2 className="wz-h2">{t("whyZenit.approach.title")}</h2>
              <ol className="wz-steps">
                {approach.map((s, i) => (
                  <li key={i}>
                    <strong>{s.title}</strong>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <figure className="wz-side-image">
              <img
                src="/images/why-zenit/why-zenit-teacher-guidance.jpg"
                alt={t('whyZenit.images.teacherGuidance')}
                style={{ objectPosition: 'center 50%' }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Highlights section */}
      <section className="wz-section wz-outcomes">
        <div className="container">
          <h2 className="wz-h2">{t("whyZenit.outcomesTitle")}</h2>
          <div className="wz-outcomes-grid">
            {highlights.map((h, i) => (
              <div key={i} className="wz-outcome">
                <div className="wz-outcome-number">{h.kpi}</div>
                <div className="wz-outcome-label">{h.label}</div>
                {h.note && <p className="wz-outcome-note">{h.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wz-section wz-cta">
        <div className="container">
          <h2 className="wz-h2">{t("whyZenit.cta.title")}</h2>
          <p className="wz-cta-text">{t("whyZenit.cta.text")}</p>
          <a className="wz-cta-btn" href="/contact#contact-form">
            {t("whyZenit.cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhyZenit;
