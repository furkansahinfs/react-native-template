import { AgreementProp } from '@src/interface';
import { i18next } from '@src/locales';


export const aggrementPreferences: Array<AgreementProp> = [
  {
    name: 'membership',
    placeHolder: i18next.t('pages.signupPage.input.membership'),
    underlinedPlaceholder: i18next.t('pages.signupPage.input.underlinedMembership'),
    type: 'checkbox',
    errors: i18next.t('pages.signupPage.error.membership'),
    rules: {
      required: false,
    },
  },
  {
    name: 'privacy',
    placeHolder: i18next.t('pages.signupPage.input.privacy'),
    underlinedPlaceholder: i18next.t('pages.signupPage.input.underlinedPrivacy'),
    type: 'checkbox',
    errors: i18next.t('pages.signupPage.error.privacy'),
    rules: { required: true },
  },
];
