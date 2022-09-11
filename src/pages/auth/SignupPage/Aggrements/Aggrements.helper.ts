import { I18N } from '../../../../locales/language';

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
    placeHolder: I18N.t('pages.signupPage.input.membership'),
    underlinedPlaceholder: I18N.t('pages.signupPage.input.underlinedMembership'),
    type: 'checkbox',
    errors: I18N.t('pages.signupPage.error.membership'),
    rules: {
      required: false,
    },
  },
  {
    name: 'privacy',
    placeHolder: I18N.t('pages.signupPage.input.privacy'),
    underlinedPlaceholder: I18N.t('pages.signupPage.input.underlinedPrivacy'),
    type: 'checkbox',
    errors: I18N.t('pages.signupPage.error.privacy'),
    rules: { required: true },
  },
];
