import React, { useState, useEffect } from 'react';
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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle")
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle")
    },
    {
      image: "https://images.unsplash.com/photo-1581726690015-c9861472ba13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: t("hero.slide3.title"),
      subtitle: t("hero.slide3.subtitle")
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleExplorePrograms = () => {
    navigate('/programs');
  };

  const handleScheduleTour = () => {
    navigate('/contact');
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="hero-image"
          />
        </div>
      ))}

      <div className="hero-content">
        <h1 className="hero-title">
          {heroSlides[currentSlide].title}
        </h1>
        <p className="hero-subtitle">
          {heroSlides[currentSlide].subtitle}
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleExplorePrograms}>
            {t("hero.explorePrograms")}
          </button>
          <button className="btn-secondary" onClick={handleScheduleTour}>
            {t("hero.scheduleTour")}
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown className="scroll-icon" />
      </div>

      <div className="slide-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
