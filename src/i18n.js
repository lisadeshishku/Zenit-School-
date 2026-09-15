import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en/translation.json';
import homeEN from './en/home.json';
import aboutEN from './en/about.json';
import whyZenitEN from './en/why-zenit.json';

import translationSQ from './sq/translation.json';
import homeSQ from './sq/home.json';
import aboutSQ from './sq/about.json';
import whyZenitSQ from './sq/why-zenit.json';

const resources = {
  en: {
    translation: {
      ...translationEN,
      ...homeEN,
      ...aboutEN,
      ...whyZenitEN,
    },
  },
  sq: {
    translation: {
      ...translationSQ,
      ...homeSQ,
      ...aboutSQ,
      ...whyZenitSQ,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'sq',
    supportedLngs: ['sq', 'en'],
    load: 'languageOnly',
    interpolation: { escapeValue: false },
  });

export default i18n;
