import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import '../styles/Footer.css';

const platformLogos = [
  {
    name: 'Google Workspace for Education',
    image: '/images/platforms/google-workspace.png',
    className: 'footer-platform-logo--google-workspace',
  },
  {
    name: 'PowerSchool SIS',
    image: '/images/platforms/powerschool.png',
    className: 'footer-platform-logo--powerschool',
  },
  {
    name: 'Code.org',
    image: '/images/platforms/code-org.png',
    className: 'footer-platform-logo--code',
  },
  {
    name: 'Financial Times',
    image: '/images/platforms/financial-times.png',
    className: 'footer-platform-logo--financial-times',
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Zenit School</div>

            <p className="footer-description">
              {t('home.footer.description')}
            </p>

            <div className="social-links">
              <a
                href="https://www.instagram.com/shkollazenit/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/shkollazenit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h2 className="footer-heading">
              {t('home.footer.quickLinks')}
            </h2>

            <ul className="link-list">
              <li>
                <Link to="/about" className="footer-link">
                  {t('home.footer.about')}
                </Link>
              </li>

              <li>
                <Link to="/programs" className="footer-link">
                  {t('home.footer.programs')}
                </Link>
              </li>

              <li>
                <Link to="/admissions" className="footer-link">
                  {t('home.footer.admissions')}
                </Link>
              </li>

              <li>
                <Link to="/contact" className="footer-link">
                  {t('home.footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h2 className="footer-heading">
              {t('home.footer.programmes')}
            </h2>

            <ul className="link-list">
              <li>
                <Link
                  to="/programs#elementary"
                  className="footer-link"
                >
                  {t('home.programs.primary.title')}
                </Link>
              </li>

              <li>
                <Link
                  to="/programs#middle"
                  className="footer-link"
                >
                  {t('home.programs.lowerSecondary.title')}
                </Link>
              </li>

              <li>
                <Link
                  to="/programs#high"
                  className="footer-link"
                >
                  {t('home.programs.upperSecondary.title')}
                </Link>
              </li>

              <li>
                <Link
                  to="/programs#summer"
                  className="footer-link"
                >
                  {t('home.programs.summer.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h2 className="footer-heading">
              {t('home.footer.contactHeading')}
            </h2>

            <div className="contact-info">
              <p>
                <MapPin size={16} aria-hidden="true" />

                <a
                  href="https://www.google.com/maps/place/Shkolla+Zenit/@42.7507188,21.1392983,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {t('home.footer.address')}
                </a>
              </p>

              <p>
                <Phone size={16} aria-hidden="true" />

                <a
                  href="tel:+38349959435"
                  className="footer-link"
                >
                  +383 49 959 435
                </a>
              </p>

              <p>
                <Mail size={16} aria-hidden="true" />

                <a
                  href="mailto:info@zenitschool.org"
                  className="footer-link"
                >
                  info@zenitschool.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="footer-platforms-logos"
          aria-label={t('home.footer.platformsAriaLabel', {
            defaultValue:
              'Platformat dhe burimet digjitale të Shkollës Zenit',
          })}
        >
          {platformLogos.map((platform) => (
            <div
              className={`footer-platform-logo ${platform.className}`}
              key={platform.name}
            >
              <img
                src={platform.image}
                alt={platform.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            {t('home.footer.copyright', {
              year: new Date().getFullYear(),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;