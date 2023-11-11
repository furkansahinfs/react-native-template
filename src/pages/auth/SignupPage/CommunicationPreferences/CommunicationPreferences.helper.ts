import i18next from 'i18next';

export interface InputProp {
  name: 'sms' | 'phone' | 'membership' | 'privacy';
  placeHolder: string;
  type: string;
  errors: string;
  rules: Object;
  choices?: Array<{ title: string; value: string }>;
}
export const communicationPreferences: Array<InputProp> = [
  {
    name: 'sms',
    placeHolder: i18next.t('pages.signupPage.input.sms'),
    type: 'checkbox',
    errors: i18next.t('pages.signupPage.error.sms'),
    rules: { required: false },
  },
  {
    name: 'phone',
    placeHolder: i18next.t('pages.signupPage.input.phone'),
    type: 'checkbox',
    errors: i18next.t('pages.signupPage.error.phone'),
    rules: { required: false },
  },
];
