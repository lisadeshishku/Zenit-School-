// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.programs": "Programs",
      "nav.admissions": "Admissions",
      "nav.contact": "Contact",
      
      // Home page
      "home.hero.title": "Excellence in Education",
      "home.hero.subtitle": "Empowering students to reach their full potential through innovative learning and character development.",
      "home.hero.cta": "Learn More",
      "home.hero.apply": "Apply Now",
      
      
      // Programs
      "programs.title": "Our Programs",
      "programs.subtitle": "Discover our comprehensive educational offerings",
      
      // About
      "about.title": "About Zenit School",
      "about.subtitle": "Building tomorrow's leaders today",
      
      // Admissions
      "admissions.title": "Admissions",
      "admissions.subtitle": "Join our community of learners",
      "admissions.apply": "Apply Now",
      "admissions.learnMore": "Learn More",
      
      // Contact
      "contact.title": "Get in Touch",
      "contact.subtitle": "We're here to answer your questions and welcome you to our community",
      "contact.visit": "Visit Us",
      "contact.call": "Call Us",
      "contact.email": "Email Us",
      "contact.hours": "Mon-Fri, 8:00 AM - 5:00 PM",
      
      // Logo
      "logo.name": "ZENIT SCHOOL",
      
      // Common
      "common.readMore": "Read More",
      "common.learnMore": "Learn More",
      "common.apply": "Apply",
      "common.close": "Close",
      "common.submit": "Submit",
      "common.loading": "Loading...",
      "common.error": "Error occurred",
      
      // Language
      "language.switch": "Switch to Albanian",
      "language.current": "English"
    }
  },
  sq: {
    translation: {
      // Navigation
      "nav.home": "Ballina",
      "nav.about": "Rreth Nesh",
      "nav.programs": "Programet",
      "nav.admissions": "Regjistrimet",
      "nav.contact": "Kontakt",
      
      // Home page
      "home.hero.title": "Përsosmëria në Arsim",
      "home.hero.subtitle": "Fuqizojmë nxënësit të arrijnë potencialin e tyre të plotë përmes mësimit novator dhe zhvillimit të karakterit.",
      "home.hero.cta": "Mëso Më Shumë",
      "home.hero.apply": "Apliko Tani",
      
      
      // Programs
      "programs.title": "Programet Tona",
      "programs.subtitle": "Zbuloni ofertat tona arsimore gjithëpërfshirëse",
      
      // About
      "about.title": "Rreth Shkollës Zenit",
      "about.subtitle": "Ndërtojmë liderët e nesërm sot",
      
      // Admissions
      "admissions.title": "Pranime",
      "admissions.subtitle": "Bashkohu me komunitetin tonë të nxënësve",
      "admissions.apply": "Apliko Tani",
      "admissions.learnMore": "Mëso Më Shumë",
      
      // Contact
      "contact.title": "Na Kontaktoni",
      "contact.subtitle": "Jemi këtu për t'iu përgjigjur pyetjeve dhe për t'ju mirëpritur në komunitetin tonë",
      "contact.visit": "Na Vizitoni",
      "contact.call": "Na Telefononi",
      "contact.email": "Na Shkruani Email",
      "contact.hours": "Hën-Pre, 8:00 AM - 5:00 PM",
      
      // Logo
      "logo.name": "SHKOLLA ZENIT",
      
      // Common
      "common.readMore": "Lexo Më Shumë",
      "common.learnMore": "Mëso Më Shumë",
      "common.apply": "Apliko",
      "common.close": "Mbyll",
      "common.submit": "Dërgo",
      "common.loading": "Duke ngarkuar...",
      "common.error": "Ndodhi një gabim",
      
      // Language
      "language.switch": "Kalo në Anglisht",
      "language.current": "Shqip"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;