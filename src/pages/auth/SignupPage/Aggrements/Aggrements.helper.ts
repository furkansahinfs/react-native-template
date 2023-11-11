import i18next from 'i18next';

export interface InputProp {
  name: 'sms' | 'phone' | 'membership' | 'privacy';
  placeHolder: string;
  underlinedPlaceholder: string;
  type: string;
  errors: string;
  rules: Object;
  choices?: Array<{ title: string; value: string }>;
}

export const aggrementPreferences: Array<InputProp> = [
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
