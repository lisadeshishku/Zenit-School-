// components/Hero.js
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Excellence in Education",
      subtitle: "Inspiring minds, shaping futures in our world-class learning environment"
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      title: "Global Perspectives",
      subtitle: "Preparing students for success in an interconnected world"
    },
    {
      image: "https://images.unsplash.com/photo-1581726690015-c9861472ba13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Innovation & Discovery",
      subtitle: "State-of-the-art facilities fostering creativity and critical thinking"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
          <button className="btn-primary">
            Explore Programs
          </button>
          <button className="btn-secondary">
            Schedule Tour
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown className="scroll-icon" />
      </div>

      {/* Slide indicators */}
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