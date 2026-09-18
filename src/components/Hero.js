import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2340&q=80',
      title: t('home.hero.slides.academics.title'),
      subtitle: t('home.hero.slides.academics.subtitle'),
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2532&q=80',
      title: t('home.hero.slides.technology.title'),
      subtitle: t('home.hero.slides.technology.subtitle'),
    },
    {
      image: 'https://images.unsplash.com/photo-1581726690015-c9861472ba13?auto=format&fit=crop&w=2340&q=80',
      title: t('home.hero.slides.development.title'),
      subtitle: t('home.hero.slides.development.subtitle'),
    },
  ];


  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  const touchStartX = useRef(null);
const touchCurrentX = useRef(null);

const showNextSlide = () => {
  setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
};

const showPreviousSlide = () => {
  setCurrentSlide(
    (previous) => (previous - 1 + heroSlides.length) % heroSlides.length
  );
};

const handleTouchStart = (event) => {
  touchStartX.current = event.touches[0].clientX;
  touchCurrentX.current = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  touchCurrentX.current = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (
    touchStartX.current === null ||
    touchCurrentX.current === null
  ) {
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

  touchStartX.current = null;
  touchCurrentX.current = null;
};

  return (
      <section
        className="hero"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      <div className="hero-overlay" />

      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} className="hero-image" />
        </div>
      ))}

      <div className="hero-content">
        <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
        <p className="hero-subtitle">{heroSlides[currentSlide].subtitle}</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/programs')}>
            {t('home.hero.explorePrograms')}
          </button>
          <button className="btn-secondary" onClick={() => navigate('/contact')}>
            {t('home.hero.scheduleVisit')}
          </button>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <ChevronDown className="scroll-icon" />
      </div>

      <div className="slide-indicators">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={t('home.hero.goToSlide', { number: index + 1 })}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
