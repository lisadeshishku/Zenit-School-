import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand / Logo */}
          <div className="footer-brand">
            <div className="footer-logo">{t('navbar.logo.name')}</div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/shkollazenit/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/shkollazenit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.quickLinks')}</h4>
            <ul className="link-list">
              <li><Link to="/about" className="footer-link">{t('footer.about')}</Link></li>
              <li><Link to="/programs" className="footer-link">{t('footer.programs')}</Link></li>
              <li><Link to="/admissions" className="footer-link">{t('footer.admissions')}</Link></li>
              <li><Link to="/contact" className="footer-link">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          {/* Programs Links */}
          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.programsHeader')}</h4>
            <ul className="link-list">
              <li><Link to="/programs#elementary" className="footer-link">{t('footer.elementary')}</Link></li>
              <li><Link to="/programs#middle" className="footer-link">{t('footer.middle')}</Link></li>
              <li><Link to="/programs#high" className="footer-link">{t('footer.high')}</Link></li>
              <li><Link to="/programs#summer" className="footer-link">{t('footer.summer')}</Link></li>
            </ul>
          </div>

          {/* Contact / Address */}
          <div className="footer-contact">
            <h4 className="footer-heading">{t('footer.connect')}</h4>
            <div className="contact-info">
              {/* Static address not translated */}
              <p>
                {' '}
                <a
                  href="https://www.google.com/maps/place/Shkolla+Zenit/@42.7507188,21.1392983,17z/data=!3m1!4b1!4m6!3m5!1s0x1354a0fd88b40665:0xb32bc8606d91da68!8m2!3d42.7507149!4d21.1418732!16s%2Fg%2F11bwyxr1hz?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Fshati Prugoc, Kampusi i Zenit School, Prishtinë, Kosovë, 10000
                </a>
              </p>

              <p>
                <Phone size={16} style={{ display: 'inline', marginRight: '8px' }} />
                <a href="tel:+38349959436" className="footer-link">
                  +383 49 959 436
                </a>
              </p>

              <p>
                <Mail size={16} style={{ display: 'inline', marginRight: '8px' }} />
                <a href="mailto:info@zenitschool.org" className="footer-link">
                  info@zenitschool.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
