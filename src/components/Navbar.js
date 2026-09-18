import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation();
  const location = useLocation();

  const menuButtonRef = useRef(null);
  const sideNavigationRef = useRef(null);

  const menuSections = [
    {
      key: 'about',
      path: '/about',
      items: [
        { name: 'about', path: '/about' },
        { name: 'whyZenit', path: '/about/why-zenit' },
        { name: 'insideClassroom', path: '/about/classroom' },
        { name: 'activities', path: '/about/activities' },
        { name: 'culture', path: '/about/culture' },
        { name: 'news', path: '/about/news' },
      ],
    },
    {
      key: 'programs',
      path: '/programs',
      items: [
        { name: 'elementary', path: '/programs#elementary' },
        { name: 'middle', path: '/programs#middle' },
        { name: 'high', path: '/programs#high' },
        { name: 'summer', path: '/programs#summer' },
      ],
    },
    {
      key: 'leadership',
      path: '/about/director',
      items: [
        { name: 'director', path: '/about/director' },
        { name: 'staff', path: '/about/staff' },
        { name: 'careers', path: '/about/careers' },
      ],
    },
    {
      key: 'admissions',
      path: '/admissions',
      items: [
        { name: 'admission', path: '/admissions' },
        {
          name: 'scholarships',
          path: '/admissions/scholarships',
        },
      ],
    },
    {
      key: 'digitalEducation',
      path: '/digital-education',
      items: [
        {
          name: 'digitalEducation',
          path: '/digital-education',
        },
        {
          name: 'campus',
          path: '/digital-education/campus',
        },
      ],
    },
    {
      key: 'contact',
      path: '/contact',
      items: [
        {
          name: 'contact',
          path: '/contact',
        },
      ],
    },
  ];

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = useCallback((returnFocus = true) => {
    /*
     * Remove focus from menu links before making the menu inert.
     * This prevents the aria-hidden/focus accessibility warning.
     */
    if (
      sideNavigationRef.current &&
      sideNavigationRef.current.contains(document.activeElement)
    ) {
      document.activeElement.blur();

      if (returnFocus) {
        menuButtonRef.current?.focus();
      }
    }

    setIsMenuOpen(false);
  }, []);

  /*
   * Close the menu if navigation happens through browser history
   * or another part of the website.
   */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent the background page from scrolling while the menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close the menu with the Escape key.
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu(true);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen, closeMenu]);

  const handleNavigation = () => {
    closeMenu(false);
  };

  return (
    <>
      {/* Main top navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-left">
              <button
                ref={menuButtonRef}
                type="button"
                className="menu-toggle-btn"
                onClick={openMenu}
                aria-label={t(
                  'navbar.openMenu',
                  'Open navigation menu'
                )}
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation-menu"
              >
                <Menu size={24} />
              </button>

              <Link
                to="/"
                className="navbar-brand"
                onClick={handleNavigation}
              >
                <img
                  src="/zenitschoollogo.jpeg"
                  alt="Zenit School"
                  className="logo-image"
                />

                <span className="logo-text">
                  {t('navbar.logo.name')}
                </span>
              </Link>
            </div>

            {/* Direct links displayed on desktop */}
            <div className="nav-links">
              <Link to="/about">
                {t('navbar.about')}
              </Link>

              <Link to="/programs">
                {t('navbar.programs')}
              </Link>

              <Link to="/admissions">
                {t('navbar.admissions')}
              </Link>

              <Link to="/contact">
                {t('navbar.contact')}
              </Link>
            </div>

            <div className="top-language-toggle">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Dark black-and-white background */}
      <div
        className={`menu-overlay ${
          isMenuOpen ? 'visible' : ''
        }`}
        onClick={() => closeMenu(true)}
        aria-hidden="true"
      />

      {/* SVG used to create the flowing menu edge */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        className="menu-shape-svg"
      >
        <defs>
          <clipPath
            id="sweeping-menu-shape"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="
                M 0 0
                L 1 0
                C 0.98 0.10, 0.82 0.18, 0.86 0.32
                C 0.90 0.44, 0.72 0.52, 0.76 0.66
                C 0.80 0.80, 0.96 0.88, 1 1
                L 0 1
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      {/* Animated side navigation */}
      <aside
        ref={sideNavigationRef}
        id="main-navigation-menu"
        className={`side-navigation ${
          isMenuOpen ? 'open' : ''
        }`}
        inert={isMenuOpen ? undefined : ''}
      >
        <div className="side-nav-header">
          <Link
            to="/"
            className="side-nav-logo"
            onClick={handleNavigation}
          >
            <img
              src="/zenitschoollogo.jpeg"
              alt="Zenit School"
              className="side-logo-image"
            />

            <span className="side-logo-text">
              {t('navbar.logo.name')}
            </span>
          </Link>

          <button
            type="button"
            className="close-btn"
            onClick={() => closeMenu(true)}
            aria-label={t(
              'navbar.closeMenu',
              'Close navigation menu'
            )}
          >
            <X size={22} />
          </button>
        </div>

        <div className="side-nav-content">
          {menuSections.map(section => (
            <section
              key={section.key}
              className="nav-section"
            >
              <Link
                to={section.path}
                className="section-header"
                onClick={handleNavigation}
              >
                <span className="section-title">
                  {t(`navbar.${section.key}`)}
                </span>

                <ArrowRight size={17} />
              </Link>

              <div className="submenu">
                {section.items.map(item => (
                  <Link
                    key={`${section.key}-${item.name}`}
                    to={item.path}
                    className="submenu-link"
                    onClick={handleNavigation}
                  >
                    {t(`navbar.${item.name}`)}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="side-nav-footer">
          <LanguageToggle />
        </div>
      </aside>
    </>
  );
};

export default Navbar;