import { SignupRequest } from '@src/api';
import { Toast } from '@src/components';
import { InputProp, SignupProps } from '@src/interface';
import { i18next } from '@src/locales';
import { navigate } from '@src/navigation';
import { countriesJson, GENDER } from '@src/assets';


/**
 * The function requests to the API to register user.
 * If register is successful, view a Toast message.
 * Else view a Toast message that includes error message of response
 * @param json : SignupProps
 */
export async function register(json: SignupProps) {
  const response = await SignupRequest(json);
  if (!response.success) {
    Toast(response.error as string, true);
  } else {
    Toast(i18next.t('pages.signupPage.signupSuccessfull'), true);
    navigate('Login');
  }
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
    isSecureTextOnTextInput: true,
  },
  {
    name: 'confirmPassword',
    placeHolder: i18next.t('pages.signupPage.input.confirmPassword'),
    type: 'textinput',
    errors: i18next.t('pages.signupPage.error.confirmPassword'),
    rules: {
      required: true,
    },
    isSecureTextOnTextInput: true,
  },
  {
    name: 'phone',
    placeHolder: i18next.t('pages.signupPage.input.phone'),
    type: 'textinput',
    keyboardTypeOnTextInput: 'numeric',
    errors: i18next.t('pages.signupPage.error.phone'),
    rules: {
      required: true,
    },
  },
  {
    name: 'gender',
    placeHolder: i18next.t('pages.signupPage.input.gender'),
    type: 'selectbox',
    errors: i18next.t('pages.signupPage.error.gender'),
    rules: { required: true },
    choices: Object.entries(GENDER).map(entry => {
      return {
        title: entry[1],
        value: entry[0].toLowerCase(),
      };
    }),
  },
  {
    name: 'countryLiving',
    placeHolder: i18next.t('pages.signupPage.input.countryLiving'),
    type: 'selectbox',
    errors: i18next.t('pages.signupPage.error.countryLiving'),
    rules: { required: true },
    choices: countriesJson,
    hasSearchOnSelectbox: true,
  },
  {
    name: 'birthday',
    placeHolder: i18next.t('pages.signupPage.input.birthday'),
    type: 'calendar',
    errors: i18next.t('pages.signupPage.error.birthday'),
    rules: { required: true },
  },
];
