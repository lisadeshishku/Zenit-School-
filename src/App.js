// src/App.js - About subpages + separate admin layout

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
import AdminPage from './pages/AdminPage';

// About subpages
import WhyZenit from './pages/about/WhyZenit';
import Classroom from './pages/about/Classroom';
import Activities from './pages/about/Activities';
import Culture from './pages/about/Culture';
import News from './pages/about/News';
import Director from './pages/about/Director';
import Staff from './pages/about/Staff';
import Careers from './pages/about/Careers';
import NewsArticle from './pages/about/NewsArticle';

// Admissions subpages
import Scholarships from './pages/admissions/Scholarships';

// Digital Education
import DigitalEducation from './pages/digital-education/DigitalEducation';
import Campus from './pages/digital-education/Campus';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Admin pages use their own layout.
  // The public navbar and footer will not appear.
  if (pathname.startsWith('/admin')) {
    return <AdminPage />;
  }

  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About and subpages */}
          <Route path="/about" element={<About />} />
          <Route path="/about/why-zenit" element={<WhyZenit />} />
          <Route path="/about/classroom" element={<Classroom />} />
          <Route path="/about/activities" element={<Activities />} />
          <Route path="/about/culture" element={<Culture />} />
          <Route path="/about/news" element={<News />} />
          <Route path="/about/director" element={<Director />} />
          <Route path="/about/staff" element={<Staff />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/news/:slug" element={<NewsArticle />}/>

          {/* Admissions and subpages */}
          <Route path="/admissions" element={<Admissions />} />
          <Route
            path="/admissions/scholarships"
            element={<Scholarships />}
          />

          {/* Digital Education */}
          <Route
            path="/digital-education"
            element={<DigitalEducation />}
          />
          <Route
            path="/digital-education/campus"
            element={<Campus />}
          />

          {/* Other pages */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;