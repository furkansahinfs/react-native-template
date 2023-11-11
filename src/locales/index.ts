import i18next from 'i18next';
import { en, tr } from './language';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: en,
    tr: tr,
  },
});
