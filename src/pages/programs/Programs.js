// src/pages/programs/Programs.js

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import '../../styles/PageHeaders.css';
import '../../styles/Programs.css';

const Programs = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [location]);

  const programs = [
    {
      id: 'elementary',
      title: t('programsPage.elementary.title'),
      ages: t('programsPage.elementary.ages'),
      desc: t('programsPage.elementary.desc'),

      images: [
        '/images/programs/elementary/elementary-classroom.jpg',
        '/images/programs/elementary/elementary-community.jpg',
        '/images/programs/elementary/elementary-creative-project.jpg',
        '/images/programs/elementary/elementary-digital-learning.jpg',
        '/images/programs/elementary/elementary-event.jpg',
        '/images/programs/elementary/elementary-friendship.jpg',
        '/images/programs/elementary/elementary-kitchen.jpg',
        '/images/programs/elementary/elementary-outdoor-art.jpg',
        '/images/programs/elementary/elementary-swimming.jpg',
      ],

      points: t('programsPage.elementary.points', {
        returnObjects: true,
      }),

      highlight: {
        title: t('programsPage.elementary.highlight.title'),
        text: t('programsPage.elementary.highlight.text'),
      },
    },

    {
      id: 'middle',
      title: t('programsPage.middle.title'),
      ages: t('programsPage.middle.ages'),
      desc: t('programsPage.middle.desc'),

      // Replace these with lower-secondary photographs later.
      images: [
        'https://placehold.co/1200x800/17366f/ffffff?text=Lower+Secondary+1',
        'https://placehold.co/1200x800/315b9f/ffffff?text=Lower+Secondary+2',
      ],

      points: t('programsPage.middle.points', {
        returnObjects: true,
      }),

      highlight: {
        title: t('programsPage.middle.highlight.title'),
        text: t('programsPage.middle.highlight.text'),
      },
    },

    {
      id: 'high',
      title: t('programsPage.high.title'),
      ages: t('programsPage.high.ages'),
      desc: t('programsPage.high.desc'),

      // Replace these with upper-secondary photographs later.
      images: [
        'https://placehold.co/1200x800/10213d/ffffff?text=Upper+Secondary+1',
        'https://placehold.co/1200x800/264b7c/ffffff?text=Upper+Secondary+2',
      ],

      points: t('programsPage.high.points', {
        returnObjects: true,
      }),

      highlight: {
        title: t('programsPage.high.highlight.title'),
        text: t('programsPage.high.highlight.text'),
      },
    },

    {
      id: 'summer',
      title: t('programsPage.summer.title'),
      ages: t('programsPage.summer.ages'),
      desc: t('programsPage.summer.desc'),

      // Replace these with Zenit Summer Camp photographs later.
      images: [
        'https://placehold.co/1200x800/087f8c/ffffff?text=Zenit+Summer+Camp+1',
        'https://placehold.co/1200x800/f59e0b/ffffff?text=Zenit+Summer+Camp+2',
      ],

      points: t('programsPage.summer.points', {
        returnObjects: true,
      }),

      highlight: {
        title: t('programsPage.summer.highlight.title'),
        text: t('programsPage.summer.highlight.text'),
      },
    },
  ];

  return (
    <div className="programs-page">
      <section className="page-header programs-header">
        <div className="container">
          <h1 className="page-title">
            {t('programsPage.header.title')}
          </h1>

          <p className="page-subtitle">
            {t('programsPage.header.subtitle')}
          </p>
        </div>
      </section>

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

const ProgramShowcase = ({ program, reversed }) => {
  const [slide, setSlide] = useState(0);

  const touchStartX = useRef(null);
  const touchCurrentX = useRef(null);

  const imageCount = program.images.length;

  const showNextSlide = () => {
    setSlide((previous) => (previous + 1) % imageCount);
  };

  const showPreviousSlide = () => {
    setSlide(
      (previous) => (previous - 1 + imageCount) % imageCount
    );
  };

  useEffect(() => {
    setSlide(0);
  }, [program.id]);

  useEffect(() => {
    if (imageCount <= 1) return undefined;

    const timer = window.setInterval(() => {
      setSlide((previous) => (previous + 1) % imageCount);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [imageCount]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchCurrentX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchCurrentX.current = event.touches[0].clientX;
  };

  const resetTouch = () => {
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchCurrentX.current === null
    ) {
      resetTouch();
      return;
    }

    const swipeDistance =
      touchStartX.current - touchCurrentX.current;

    const minimumSwipeDistance = 50;

    if (swipeDistance > minimumSwipeDistance) {
      showNextSlide();
    } else if (swipeDistance < -minimumSwipeDistance) {
      showPreviousSlide();
    }

    resetTouch();
  };

  const points = Array.isArray(program.points)
    ? program.points
    : [];

  return (
    <article
      id={program.id}
      className={`program-showcase ${
        reversed ? 'reversed' : ''
      }`}
    >
      <div
        className="program-image-area"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={resetTouch}
      >
        {program.images.map((image, index) => (
          <img
            key={`${program.id}-image-${index}`}
            src={image}
            alt={`${program.title} ${index + 1}`}
            className={`program-slide ${
              index === slide ? 'active' : ''
            }`}
            draggable="false"
          />
        ))}

        {imageCount > 1 && (
          <>
            <button
              type="button"
              className="program-slide-arrow program-slide-arrow-left"
              onClick={showPreviousSlide}
              aria-label={`Previous ${program.title} image`}
            >
              ‹
            </button>

            <button
              type="button"
              className="program-slide-arrow program-slide-arrow-right"
              onClick={showNextSlide}
              aria-label={`Next ${program.title} image`}
            >
              ›
            </button>

            <div className="program-slide-indicators">
              {program.images.map((_, index) => (
                <button
                  key={`${program.id}-indicator-${index}`}
                  type="button"
                  className={`program-slide-dot ${
                    index === slide ? 'active' : ''
                  }`}
                  onClick={() => setSlide(index)}
                  aria-label={`Show ${program.title} image ${
                    index + 1
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="program-text-area">
        <div className="program-heading">
          <h2 className="program-title">
            {program.title}
          </h2>

          <span className="program-age">
            {program.ages}
          </span>
        </div>

        <p className="program-desc">{program.desc}</p>

        {points.length > 0 && (
          <ul className="program-points">
            {points.map((point, index) => (
              <li key={`${program.id}-point-${index}`}>
                ✓ {point}
              </li>
            ))}
          </ul>
        )}

        <div className="program-highlight">
          <strong>{program.highlight.title}</strong>{' '}
          {program.highlight.text}
        </div>
      </div>
    </article>
  );
};

export default Programs;