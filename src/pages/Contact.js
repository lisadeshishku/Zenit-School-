// src/pages/Contact.js
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import '../styles/Contact.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdkwqjjk';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const subjectOptions = t('contactPage.form.subjects.options', { returnObjects: true }) || [];
  const formRef = useRef(null);
  const bannerRef = useRef(null);

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [bannerMsg, setBannerMsg] = useState('');

  // Restrict phone to digits, +, (), -, and spaces
  const sanitizePhone = (value) => value.replace(/[^\d+\s()-]/g, '');

  // Hover color helper for Quick Info cards
  const setCardColor = (card, color) => {
    if (!card) return;
    card.style.color = color || '';
    card.querySelectorAll('h4, p, span, strong, em').forEach((el) => {
      el.style.color = color || '';
    });
  };

  // Clear the form if user returns via back/forward cache
  useEffect(() => {
    const handlePageShow = () => {
      if (formRef.current) formRef.current.reset();
      setStatus('idle');
      setBannerMsg('');
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // Submit via fetch; show inline banner; reset after success
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('submitting');
    setBannerMsg('');

    try {
      const formData = new FormData(formRef.current);
      formData.set('_language', i18n.language || 'en');

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        setBannerMsg(
          t('contactPage.form.success', {
            defaultValue: 'Thank you! Your message has been sent.',
          })
        );
        formRef.current.reset();

        requestAnimationFrame(() => {
          bannerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      } else {
        const data = await res.json().catch(() => ({}));
        console.error('Formspree error:', data);
        setStatus('error');
        setBannerMsg(
          t('contactPage.form.error', {
            defaultValue: 'Sorry, something went wrong. Please try again or email info@zenitschool.org.',
          })
        );
        requestAnimationFrame(() => {
          bannerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setBannerMsg(
        t('contactPage.form.error', {
          defaultValue: 'Sorry, something went wrong. Please try again or email info@zenitschool.org.',
        })
      );
      requestAnimationFrame(() => {
        bannerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  };

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
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            {/* Address (fixed text, not translated) */}
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

            {/* Phones */}
            <div className="contact-item">
              <div className="contact-icon"><Phone /></div>
              <h3>{t('contactPage.info.call.title')}</h3>
              <p>
                {t('contactPage.info.call.admissions')}<br />
                {t('contactPage.info.call.camp')}
              </p>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon"><Mail /></div>
              <h3>{t('contactPage.info.email.title')}</h3>
              <p>info@zenitschool.org</p>
            </div>

            {/* Hours */}
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

      {/* Form */}
      <section id="contact-form" className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>{t('contactPage.form.title')}</h2>

            {/* Inline status banner (no alerts) */}
            <div ref={bannerRef} aria-live="polite" aria-atomic="true">
              {status === 'success' && (
                <div className="form-banner form-banner--success">
                  <CheckCircle2 size={18} style={{ marginRight: 8 }} />
                  <span>{bannerMsg}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="form-banner form-banner--error">
                  <AlertTriangle size={18} style={{ marginRight: 8 }} />
                  <span>{bannerMsg}</span>
                </div>
              )}
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
              autoComplete="off"
            >
              {/* Hidden fields */}
              <input type="hidden" name="_language" value={i18n.language} />
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contactPage.form.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('contactPage.form.placeholders.name')}
                    autoComplete="off"
                    disabled={status === 'submitting'}
                  />
                </div>

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
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{t('contactPage.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t('contactPage.form.placeholders.phone')}
                    autoComplete="off"
                    inputMode="tel"
                    pattern="^\+?\d[\d\s()-]{6,}$"
                    title={t('contactPage.form.phoneTitle', { defaultValue: 'Please enter a valid phone number' })}
                    onInput={(e) => { e.currentTarget.value = sanitizePhone(e.currentTarget.value); }}
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contactPage.form.subject')} *</label>
                  <select id="subject" name="subject" required defaultValue="" disabled={status === 'submitting'}>
                    <option value="" disabled>{t('contactPage.form.subjects.placeholder')}</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contactPage.form.message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder={t('contactPage.form.placeholders.message')}
                  autoComplete="off"
                  disabled={status === 'submitting'}
                />
              </div>

              <input type="hidden" name="_subject" value="New message from Zenit School website" />

              <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                <Send className="btn-icon" />
                {status === 'submitting'
                  ? t('contactPage.form.sending', { defaultValue: 'Sending…' })
                  : t('contactPage.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Info */}
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
