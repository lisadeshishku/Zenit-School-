// components/Navbar.js - Final Clean Navigation Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const { t } = useTranslation();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleSubmenu = (section) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Streamlined menu structure - shorter names, better organization
  const menuSections = {
    'About': [
      { name: 'About', path: '/about' },
      { name: 'Why Zenit?', path: '/about/why-zenit' },
      { name: 'Classroom', path: '/about/classroom' },
      { name: 'Activities', path: '/about/activities' },
      { name: 'Culture', path: '/about/culture' },
      { name: 'News', path: '/about/news' }
    ],
    'Leadership': [
      { name: 'Director', path: '/about/director' },
      { name: 'Staff', path: '/about/staff' },
      { name: 'Mission', path: '/about/mission' },
      { name: 'History', path: '/about/history' },
      { name: 'Research', path: '/about/research' },
      { name: 'Careers', path: '/about/careers' }
    ],
    'Programs': [
      { name: 'Overview', path: '/programs' },
      { name: 'Arts', path: '/programs/arts' },
      { name: 'Drama', path: '/programs/drama' },
      { name: 'Music', path: '/programs/music' },
      { name: 'Sports', path: '/programs/sports' }
    ],
    'Admissions': [
      { name: 'Apply', path: '/admissions' },
      { name: 'Elementary', path: '/admissions/elementary' },
      { name: 'Middle School', path: '/admissions/middle' },
      { name: 'High School', path: '/admissions/high' },
      { name: 'Financial Aid', path: '/admissions/financial-aid' },
      { name: 'Scholarships', path: '/admissions/scholarships' }
    ],
    'Digital Education': [
      { name: 'Overview', path: '/digital-education' },
      { name: 'Campus', path: '/digital-education/campus' },
      { name: 'Curriculum', path: '/digital-education/curriculum' },
      { name: 'Results', path: '/digital-education/results' }
    ],
    'Community': [
      { name: 'Volunteer', path: '/community/volunteer' },
      { name: 'Charity', path: '/community/charity' },
      { name: 'Solidarity', path: '/community/solidarity' }
    ],
    'Media': [
      { name: 'Podcast', path: '/media/podcast' },
      { name: 'Calendar', path: '/media/calendar' }
    ],
    'Contact': [
      { name: 'Contact', path: '/contact' },
      { name: 'Visit', path: '/contact/visit' }
    ]
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenus({});
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Menu Button */}
            <button
              className="menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link to="/" className="navbar-brand" onClick={closeMenu}>
              <img src="/zenitschoollogo.jpeg" alt="Zenit School Logo" className="logo-image" />
              <div className="logo-text">{t('logo.name')}</div>
            </Link>
            
            {/* Language Toggle */}
            <div className="top-language-toggle">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay and Side Navigation */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="menu-overlay"
            onClick={handleOverlayClick}
          />

          {/* Side Navigation */}
          <div className="side-navigation open">
            <div className="side-nav-header">
              <div className="side-nav-logo">
                <img src="/zenitschoollogo.jpeg" alt="Zenit School Logo" className="side-logo-image" />
                <span className="side-logo-text">Navigation</span>
              </div>
              <button
                onClick={closeMenu}
                className="close-btn"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            <div className="side-nav-content">
              {Object.entries(menuSections).map(([section, items]) => (
                <div key={section} className="nav-section">
                  <button
                    onClick={() => toggleSubmenu(section)}
                    className="section-header"
                    aria-expanded={openSubmenus[section]}
                  >
                    <span className="section-title">{section}</span>
                    {openSubmenus[section] ? (
                      <ChevronDown size={14} />
                    ) : (
                      <ChevronRight size={14} />
                    )}
                  </button>
                  
                  {openSubmenus[section] && (
                    <div className="submenu">
                      {items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="submenu-link"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Language Toggle in Side Menu */}
            <div className="side-nav-footer">
              <LanguageToggle />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;