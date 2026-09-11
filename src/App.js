// src/App.js

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './i18n';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/programs/Programs';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

// Change this to false when the full website is ready.
const SITE_UNDER_CONSTRUCTION = true;

function ComingSoon() {
  return (
    <main className="coming-soon-page">
      <div className="background-shape shape-one" />
      <div className="background-shape shape-two" />

      <section className="coming-soon-card">
        <img
          src="/zenitschoollogo.jpeg"
          alt="Zenit School"
          className="coming-soon-logo"
        />

        <div className="coming-soon-divider">
          <span />
          <span />
          <span />
        </div>

        <h1>
          Faqja jonë e re
          <br />
          po vjen së shpejti
        </h1>

        <p className="coming-soon-message">
          Ju falënderojmë për mirëkuptimin.
        </p>

        <div className="coming-soon-status">
          <span className="status-dot" />
          Faqja është duke u përgatitur
        </div>
      </section>
    </main>
  );
}
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (SITE_UNDER_CONSTRUCTION) {
    return <ComingSoon />;
  }

  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;