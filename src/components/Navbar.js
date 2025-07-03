import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const { t } = useTranslation();

  // The keys in the translation files
  const menuSections = {
    about: [
      { name: 'about', path: '/about' },
      { name: 'whyZenit', path: '/about/why-zenit' },
      { name: 'insideClassroom', path: '/about/classroom' },
      { name: 'activities', path: '/about/activities' },
      { name: 'culture', path: '/about/culture' },
      { name: 'news', path: '/about/news' }
    ],
    programs: [
      { name: 'elementary', path: '/programs#elementary' },
      { name: 'middle', path: '/programs#middle' },
      { name: 'high', path: '/programs#high' },
      { name: 'summer', path: '/programs#summer' }
    ],
    leadership: [
      { name: 'director', path: '/about/director' },
      { name: 'staff', path: '/about/staff' },
      { name: 'mission', path: '/about/mission' },
      { name: 'history', path: '/about/history' },
      { name: 'careers', path: '/about/careers' }
    ],
    community: [
      { name: 'volunteer', path: '/community/volunteer' },
      { name: 'charity', path: '/community/charity' },
      { name: 'solidarity', path: '/community/solidarity' }
    ],
    admissions: [
      { name: 'admission', path: '/admissions' },
      { name: 'aid', path: '/admissions/financial-aid' },
      { name: 'scholarships', path: '/admissions/scholarships' },
      { name: 'fees', path: '/admissions/fees' }
    ],
    digitalEducation: [
      { name: 'digitalEducation', path: '/digital-education' },
      { name: 'campus', path: '/digital-education/campus' },
      { name: 'curriculum', path: '/digital-education/curriculum' },
      { name: 'results', path: '/digital-education/results' }
    ],
    contact: [
      { name: 'contact', path: '/contact' }
    ]
  };

  const sectionOrder = [
    'about', 'programs', 'leadership', 'community', 'admissions', 'digitalEducation', 'contact'
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenus({});
  };

  return (
    <>
      {/* Top Header Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <button
              className="menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="navbar-brand" onClick={closeMenu}>
              <img src="/zenitschoollogo.jpeg" alt="Zenit School Logo" className="logo-image" />
              <div className="logo-text">{t('navbar.logo.name')}</div>
            </Link>
            <div className="top-language-toggle">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}
      <div className={`side-navigation ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-nav-header">
          <div className="side-nav-logo">
            <img src="/zenitschoollogo.jpeg" alt="Zenit School Logo" className="side-logo-image" />
            <span className="side-logo-text"></span>
          </div>
          <button
            onClick={closeMenu}
            className="close-btn"
          >
            <X size={20} />
          </button>
        </div>
        <div className="side-nav-content">
          {sectionOrder.map(sectionKey => (
            <div key={sectionKey} className="nav-section">
              <button
                onClick={() => setOpenSubmenus(prev => ({
                  ...prev,
                  [sectionKey]: !prev[sectionKey]
                }))}
                className="section-header"
              >
                <span className="section-title">{t(`navbar.${sectionKey}`)}</span>
                {openSubmenus[sectionKey] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {openSubmenus[sectionKey] && (
                <div className="submenu">
                  {menuSections[sectionKey].map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="submenu-link"
                      onClick={closeMenu}
                    >
                      {t(`navbar.${item.name}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="side-nav-footer">
          <LanguageToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
