import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const subjectOptions = t('contactPage.form.subjects.options', { returnObjects: true }) || [];
  const formRef = useRef(null);

  // Helper: sanitize phone to only allow digits, +, (), -, and spaces
  const sanitizePhone = (value) => value.replace(/[^\d+\s()-]/g, '');

  // Helper: change text color on hover (fixes stubborn CSS overrides)
  const setCardColor = (card, color) => {
    if (!card) return;
    card.style.color = color;
    card.querySelectorAll('h4, p, span, strong, em').forEach((el) => {
      el.style.color = color;
    });
  };

  // Reset form when user navigates back to this page
  useEffect(() => {
    const handlePageShow = () => {
      if (formRef.current) formRef.current.reset();
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('contactPage.header.title')}</h1>
          <p className="page-subtitle">{t('contactPage.header.subtitle')}</p>
        </div>
      </section>

     {/* Contact Info */}
{/* Contact Info */}
<section className="contact-info-section">
  <div className="container">
    <div className="contact-grid">

      {/* Address */}
      <div className="contact-item">
        <div className="contact-icon"><MapPin /></div>
        <h3>{t('contactPage.info.visit.title')}</h3>
        <p>
          <a
            href="https://www.google.com/maps/place/Shkolla+Zenit/@42.7507188,21.1392983,17z/data=!3m1!4b1!4m6!3m5!1s0x1354a0fd88b40665:0xb32bc8606d91da68!8m2!3d42.7507149!4d21.1418732!16s%2Fg%2F11bwyxr1hz?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Fshati Prugoc, Kampusi i Zenit School, Prishtinë, Kosovë, 10000
          </a>
        </p>
      </div>


      {/* Phone Numbers */}
      <div className="contact-item">
        <div className="contact-icon"><Phone /></div>
        <h3>{t('contactPage.info.call.title')}</h3>
        <p>
          {t('contactPage.info.call.admissions')}: +383 49 959 435<br />
          {t('contactPage.info.call.camp')}: +383 49 959 430
        </p>
      </div>


      {/* Email */}
      <div className="contact-item">
        <div className="contact-icon"><Mail /></div>
        <h3>{t('contactPage.info.email.title')}</h3>
        <p>info@zenitschool.org</p>
      </div>

      {/* Office Hours */}
      <div className="contact-item">
        <div className="contact-icon"><Clock /></div>
        <h3>{t('contactPage.info.hours.title')}</h3>
        <p>
          {t('contactPage.info.hours.weekdays')}<br />
          {t('contactPage.info.hours.weekdayTime')}
        </p>
      </div>



    </div>
  </div>
</section>



      {/* Contact Form (Formspree) */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>{t('contactPage.form.title')}</h2>

            <form
              ref={formRef}
              action="https://formspree.io/f/xdkwqjjk"
              method="POST"
              className="contact-form"
              autoComplete="off"
              onSubmit={() => {
                if (formRef.current) formRef.current.reset();
              }}
            >
              <input type="hidden" name="_language" value={i18n.language} />
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="form-row">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="name">{t('contactPage.form.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('contactPage.form.placeholders.name')}
                    autoComplete="off"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">{t('contactPage.form.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t('contactPage.form.placeholders.email')}
                    autoComplete="off"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address (example@domain.com)"
                  />
                </div>
              </div>

              <div className="form-row">
                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">{t('contactPage.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t('contactPage.form.placeholders.phone')}
                    autoComplete="off"
                    inputMode="numeric"
                    pattern="^\+?\d[\d\s()-]{6,}$"
                    title="Please enter a valid phone number (numbers only)"
                    onInput={(e) => {
                      e.currentTarget.value = sanitizePhone(e.currentTarget.value);
                    }}
                  />
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject">{t('contactPage.form.subject')} *</label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="" disabled>
                      {t('contactPage.form.subjects.placeholder')}
                    </option>
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">{t('contactPage.form.message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder={t('contactPage.form.placeholders.message')}
                  autoComplete="off"
                />
              </div>

              <input type="hidden" name="_subject" value="New message from Zenit School website" />

              <button type="submit" className="submit-btn">
                <Send className="btn-icon" />
                {t('contactPage.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Info (with JS hover color) */}
      <section className="quick-info-section">
        <div className="container">
          <div className="quick-info-grid">

            <div
              className="info-card"
              onMouseEnter={(e) => setCardColor(e.currentTarget, '#2563eb')}
              onMouseLeave={(e) => setCardColor(e.currentTarget, '')}
              style={{ cursor: 'pointer' }}
            >
              <h4>🏊 {t('contactPage.quick.pool.title')}</h4>
              <p>{t('contactPage.quick.pool.text')}</p>
            </div>

            <div
              className="info-card"
              onMouseEnter={(e) => setCardColor(e.currentTarget, '#2563eb')}
              onMouseLeave={(e) => setCardColor(e.currentTarget, '')}
              style={{ cursor: 'pointer' }}
            >
              <h4>🚗 {t('contactPage.quick.parking.title')}</h4>
              <p>{t('contactPage.quick.parking.text')}</p>
            </div>

            <div
              className="info-card"
              onMouseEnter={(e) => setCardColor(e.currentTarget, '#2563eb')}
              onMouseLeave={(e) => setCardColor(e.currentTarget, '')}
              style={{ cursor: 'pointer' }}
            >
              <h4>♿ {t('contactPage.quick.access.title')}</h4>
              <p>{t('contactPage.quick.access.text')}</p>
            </div>

            <div
              className="info-card"
              onMouseEnter={(e) => setCardColor(e.currentTarget, '#2563eb')}
              onMouseLeave={(e) => setCardColor(e.currentTarget, '')}
              style={{ cursor: 'pointer' }}
            >
              <h4>🌐 {t('contactPage.quick.languages.title')}</h4>
              <p>{t('contactPage.quick.languages.text')}</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
