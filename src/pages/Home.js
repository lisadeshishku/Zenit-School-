// pages/Home.js - Unique Homepage Content (Different from other pages)
import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import LearningEnvironment from '../components/LearningEnvironment';
import AdmissionsCTA from '../components/AdmissionsCTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <LearningEnvironment />
      <AdmissionsCTA />
    </div>
  );
};

export default Home;