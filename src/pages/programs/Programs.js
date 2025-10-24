// src/pages/programs/Programs.js
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "../../styles/PageHeaders.css";
import "../../styles/Programs.css";

const Programs = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const programs = [
    {
      id: "elementary",
      title: t("programsPage.elementary.title"),
      ages: t("programsPage.elementary.ages"),
      desc: t("programsPage.elementary.desc"),
      images: [
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      ],
      points: t("programsPage.elementary.points", { returnObjects: true }),
      highlight: {
        title: t("programsPage.elementary.highlight.title"),
        text: t("programsPage.elementary.highlight.text"),
      },
    },
    {
      id: "middle",
      title: t("programsPage.middle.title"),
      ages: t("programsPage.middle.ages"),
      desc: t("programsPage.middle.desc"),
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
      ],
      points: t("programsPage.middle.points", { returnObjects: true }),
      highlight: {
        title: t("programsPage.middle.highlight.title"),
        text: t("programsPage.middle.highlight.text"),
      },
    },
    {
      id: "high",
      title: t("programsPage.high.title"),
      ages: t("programsPage.high.ages"),
      desc: t("programsPage.high.desc"),
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      ],
      points: t("programsPage.high.points", { returnObjects: true }),
      highlight: {
        title: t("programsPage.high.highlight.title"),
        text: t("programsPage.high.highlight.text"),
      },
    },
    {
      id: "summer",
      title: t("programsPage.summer.title"),
      ages: t("programsPage.summer.ages"),
      desc: t("programsPage.summer.desc"),
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
      ],
      points: t("programsPage.summer.points", { returnObjects: true }),
      highlight: {
        title: t("programsPage.summer.highlight.title"),
        text: t("programsPage.summer.highlight.text"),
      },
    },
  ];

  return (
    <div className="programs-page">
      {/* Header */}
      <section className="page-header programs-header">
        <div className="container">
          <h1 className="page-title">{t("programsPage.header.title")}</h1>
          <p className="page-subtitle">{t("programsPage.header.subtitle")}</p>
        </div>
      </section>

      {/* Programs */}
      <section className="programs-section">
        <div className="container">
          {programs.map((program, index) => (
            <ProgramShowcase
              key={program.id}
              program={program}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

// Hero-like slideshow for each program
const ProgramShowcase = ({ program, reversed }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % program.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [program.images.length]);

  return (
    <div
      id={program.id}
      className={`program-showcase ${reversed ? "reversed" : ""}`}
    >
      <div className="program-image-area">
        {program.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={program.title}
            className={`program-slide ${i === slide ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="program-text-area">
        <div className="program-heading">
          <h2 className="program-title">{program.title}</h2>
          <span className="program-age">{program.ages}</span>
        </div>
        <p className="program-desc">{program.desc}</p>
        <ul className="program-points">
          {program.points.map((point, i) => (
            <li key={i}>✓ {point}</li>
          ))}
        </ul>
        <div className="program-highlight">
          <strong>{program.highlight.title}</strong> {program.highlight.text}
        </div>
      </div>
    </div>
  );
};

export default Programs;
