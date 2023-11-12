import { i18next } from '@src/locales';

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
    placeHolder: i18next.t('pages.signupPage.input.name'),
    type: 'textinput',
    errors: i18next.t('pages.signupPage.error.name'),
    rules: { required: true },
  },
  {
    name: 'surname',
    placeHolder: i18next.t('pages.signupPage.input.surname'),
    type: 'textinput',
    errors: i18next.t('pages.signupPage.error.surname'),
    rules: { required: true },
  },
  {
    name: 'email',
    placeHolder: i18next.t('pages.signupPage.input.email'),
    type: 'textinput',
    errors: i18next.t('pages.signupPage.error.email'),
    rules: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: i18next.t('pages.signupPage.error.email'),
      },
    },
  },
  {
    name: 'password',
    placeHolder: i18next.t('pages.signupPage.input.password'),
    type: 'textinput',
    errors: i18next.t('pages.signupPage.error.password'),
    rules: {
      required: true,
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[_!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        message: i18next.t('pages.signupPage.error.password'),
      },
    },
    isSecureText: true,
  },
  {
    name: 'confirmPassword',
    placeHolder: i18next.t('pages.signupPage.input.confirmPassword'),
    type: 'textinput',
    errors: i18next.t('pages.signupPage.error.confirmPassword'),
    rules: {
      required: true,
    },
    isSecureText: true,
  },
  {
    name: 'gender',
    placeHolder: i18next.t('pages.signupPage.input.gender'),
    type: 'selectbox',
    errors: i18next.t('pages.signupPage.error.gender'),
    rules: { required: true },
    choices: [
      {
        title: i18next.t('pages.signupPage.choice.male'),
        value: 'male',
      },
      {
        title: i18next.t('pages.signupPage.choice.female'),
        value: 'female',
      },
      {
        title: i18next.t('pages.signupPage.choice.not'),
        value: 'not',
      },
    ],
  },
  {
    name: 'birthday',
    placeHolder: i18next.t('pages.signupPage.input.birthday'),
    type: 'calendar',
    errors: i18next.t('pages.signupPage.error.birthday'),
    rules: { required: true },
  },
];
