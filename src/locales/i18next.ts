import i18next from 'i18next';
import { LANGUAGE } from '@src/assets';
import translationsEN from './en/translations.json';
import translationsTR from './tr/translations.json';

i18next.init({
  compatibilityJSON: 'v3',
  lng: LANGUAGE.EN, // if you're using a language detector, do not define the lng option
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
