import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const isEnglish = currentLanguage === 'en';
  const nextLanguage = isEnglish ? 'sq' : 'en';

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={() => i18n.changeLanguage(nextLanguage)}
      aria-label={t('home.language.switchTo', { language: isEnglish ? 'shqip' : 'English' })}
    >
      <span className="flag-icon" aria-hidden="true">{isEnglish ? '🇦🇱' : '🇬🇧'}</span>
      <span className="language-text">{isEnglish ? 'SQ' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle;
