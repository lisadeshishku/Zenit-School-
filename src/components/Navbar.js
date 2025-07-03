// components/Navbar.js - Updated for Side Navigation Only
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

  const toggleSubmenu = (section) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuSections = {
    
    'About': [
      { name: 'About', path: '/about' },
      { name: 'Why Zenit?', path: '/about/why-zenit' },
      { name: 'Inside the Classroom', path: '/about/classroom' },
      { name: 'Activities', path: '/about/activities' },
      { name: 'Culture', path: '/about/culture' },
      { name: 'News', path: '/about/news' }
    ],
    'Programs': [
      { name: 'Elementary School', path: '/programs#elementary' },
      { name: 'Middle School', path: '/programs#middle' },
      { name: 'High School', path: '/programs#high' },
      { name: 'Summer Camp', path: '/programs#summer' }
    ],

    'Leadership': [
      { name: 'From the Director', path: '/about/director' },
      { name: 'Meet the Staff', path: '/about/staff' },
      { name: 'Mission and Vision', path: '/about/mission' },
      { name: 'Our History', path: '/about/history' },
      { name: 'Employment Opportunities', path: '/about/careers' }
    ],
    'Community': [
      { name: 'Volunteer Work', path: '/community/volunteer' },
      { name: 'Charity', path: '/community/charity' },
      { name: 'Solidarity', path: '/community/solidarity' }
    ],
    'Admissions': [
      { name: 'Admission to Zenit', path: '/admissions' },
      { name: 'Financial Aid', path: '/admissions/financial-aid' },
      { name: 'Scholarships and Awards', path: '/admissions/scholarships' },
      { name: 'Student Fees', path: '/admissions/fees' }
    ],
    'Digital Education': [
      { name: 'Digital Education', path: '/digital-education' },
      { name: 'Academic Campus', path: '/digital-education/campus' },
      { name: 'Academic Curriculum', path: '/digital-education/curriculum' },
      { name: 'Test Results', path: '/digital-education/results' }
    ],
    'Contact': [
      { name: 'Contact Details', path: '/contact' },
    ]
  };

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
            {/* Menu Button */}
            <button
              className="menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link to="/" className="navbar-brand" onClick={closeMenu}>
              <img src="/zenitschoollogo.jpeg" alt="Zenit School Logo" className="logo-image" />
              <div className="logo-text">{t('logo.name')}</div>
            </Link>
            
            {/* Language Toggle (always visible on top) */}
            <div className="top-language-toggle">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Black and White Overlay */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}

      {/* Side Navigation */}
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
          {Object.entries(menuSections).map(([section, items]) => (
            <div key={section} className="nav-section">
              <button
                onClick={() => toggleSubmenu(section)}
                className="section-header"
              >
                <span className="section-title">{section}</span>
                {openSubmenus[section] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
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
  );
};

export default Navbar;