// components/LanguageToggle.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sq' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={t('language.switch')}
    >
      <span className="flag-icon">
        {i18n.language === 'en' ? '🇦🇱' : '🇬🇧'}
      </span>
      <span className="language-text">
        {i18n.language === 'en' ? 'SQ' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;