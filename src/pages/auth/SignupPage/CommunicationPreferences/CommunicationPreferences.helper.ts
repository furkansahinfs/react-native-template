import { I18N } from '../../../../locales/language';

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
    placeHolder: I18N.t('pages.signupPage.input.sms'),
    type: 'checkbox',
    errors: I18N.t('pages.signupPage.error.sms'),
    rules: { required: false },
  },
  {
    name: 'phone',
    placeHolder: I18N.t('pages.signupPage.input.phone'),
    type: 'checkbox',
    errors: I18N.t('pages.signupPage.error.phone'),
    rules: { required: false },
  },
];
