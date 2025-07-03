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
          <div className="footer-brand">
            <div className="footer-logo">{t('navbar.logo.name')}</div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/shkollazenit/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/shkollazenit" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.quickLinks')}</h4>
            <ul className="link-list">
              <li><Link to="/about" className="footer-link">{t('footer.about')}</Link></li>
              <li><Link to="/programs" className="footer-link">{t('footer.programs')}</Link></li>
              <li><Link to="/admissions" className="footer-link">{t('footer.admissions')}</Link></li>
              <li><Link to="/contact" className="footer-link">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.programsHeader')}</h4>
            <ul className="link-list">
              <li><Link to="/programs#elementary" className="footer-link">{t('footer.elementary')}</Link></li>
              <li><Link to="/programs#middle" className="footer-link">{t('footer.middle')}</Link></li>
              <li><Link to="/programs#high" className="footer-link">{t('footer.high')}</Link></li>
              <li><Link to="/programs#summer" className="footer-link">{t('footer.summer')}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">{t('footer.connect')}</h4>
            <div className="contact-info">
              <p>📍 {t('footer.address1')}</p>
              <p>{t('footer.address2')}</p>
              <p>
                <Phone size={16} style={{display: 'inline', marginRight: '8px'}} />
                <a href="tel:+15551234567" className="footer-link">
                  {t('footer.phone')}
                </a>
              </p>
              <p>
                <Mail size={16} style={{display: 'inline', marginRight: '8px'}} />
                <a href="mailto:info@zenitschool.edu" className="footer-link">
                  {t('footer.email')}
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
