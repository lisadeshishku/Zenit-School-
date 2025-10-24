// src/App.js - Updated with About subpages + scroll to top
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

// NEW: About subpages
import WhyZenit from './pages/about/WhyZenit';
import Classroom from './pages/about/Classroom';
import Activities from './pages/about/Activities';
import Culture from './pages/about/Culture';
import News from './pages/about/News';

import Director from './pages/about/Director';
import Staff from './pages/about/Staff';
import Mission from './pages/about/Mission';
import History from './pages/about/History';
import Careers from './pages/about/Careers';

import Scholarships from './pages/admissions/Scholarships';
import DigitalEducation from './pages/digital-education/DigitalEducation';
import Campus from './pages/digital-education/Campus';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About + subpages */}
          <Route path="/about" element={<About />} />
          <Route path="/about/why-zenit" element={<WhyZenit />} />
          <Route path="/about/classroom" element={<Classroom />} />
          <Route path="/about/activities" element={<Activities />} />
          <Route path="/about/culture" element={<Culture />} />
          <Route path="/about/news" element={<News />} />
          <Route path="/about/director" element={<Director />} />
          <Route path="/about/staff" element={<Staff />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/careers" element={<Careers />} />
          {/* Admissions subpages */}
          <Route path="/admissions/scholarships" element={<Scholarships />} />

          {/* Digital Education */}
          <Route path="/digital-education" element={<DigitalEducation />} />
          <Route path="/digital-education/campus" element={<Campus />} />


          {/* Other sections */}
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
