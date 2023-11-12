import i18next from 'i18next';
import translationsEN from './en/translations.json';
import translationsTR from './tr/translations.json';

i18next.init({
  compatibilityJSON: 'v3',
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: translationsEN,
    },
    tr: {
      translation: translationsTR,
    },
  },
});

export default i18next;
