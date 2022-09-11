import { I18N } from '../../../../locales/language';

export interface InputProp {
  name:
    | 'name'
    | 'surname'
    | 'email'
    | 'password'
    | 'confirmPassword'
    | 'gender'
    | 'birthday'
    | 'communication';
  placeHolder: string;
  type: string;
  errors: string;
  rules: Object;
  isSecureText?: boolean;
  choices?: Array<{ title: string; value: string }>;
}
export const inputArray: Array<InputProp> = [
  {
    name: 'name',
    placeHolder: I18N.t('pages.signupPage.input.name'),
    type: 'textinput',
    errors: I18N.t('pages.signupPage.error.name'),
    rules: { required: true },
  },
  {
    name: 'surname',
    placeHolder: I18N.t('pages.signupPage.input.surname'),
    type: 'textinput',
    errors: I18N.t('pages.signupPage.error.surname'),
    rules: { required: true },
  },
  {
    name: 'email',
    placeHolder: I18N.t('pages.signupPage.input.email'),
    type: 'textinput',
    errors: I18N.t('pages.signupPage.error.email'),
    rules: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: I18N.t('pages.signupPage.error.email'),
      },
    },
  },
  {
    name: 'password',
    placeHolder: I18N.t('pages.signupPage.input.password'),
    type: 'textinput',
    errors: I18N.t('pages.signupPage.error.password'),
    rules: {
      required: true,
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[_!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        message: I18N.t('pages.signupPage.error.password'),
      },
    },
    isSecureText: true,
  },
  {
    name: 'confirmPassword',
    placeHolder: I18N.t('pages.signupPage.input.confirmPassword'),
    type: 'textinput',
    errors: I18N.t('pages.signupPage.error.confirmPassword'),
    rules: {
      required: true,
    },
    isSecureText: true,
  },
  {
    name: 'gender',
    placeHolder: I18N.t('pages.signupPage.input.gender'),
    type: 'selectbox',
    errors: I18N.t('pages.signupPage.error.gender'),
    rules: { required: true },
    choices: [
      {
        title: I18N.t('pages.signupPage.choice.male'),
        value: 'male',
      },
      {
        title: I18N.t('pages.signupPage.choice.female'),
        value: 'female',
      },
      {
        title: I18N.t('pages.signupPage.choice.not'),
        value: 'not',
      },
    ],
  },
  {
    name: 'birthday',
    placeHolder: I18N.t('pages.signupPage.input.birthday'),
    type: 'calendar',
    errors: I18N.t('pages.signupPage.error.birthday'),
    rules: { required: true },
  },
];
