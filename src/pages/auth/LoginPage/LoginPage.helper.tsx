import i18next from 'i18next';
import api, { LoginRequest } from 'src/api';
import { Toast } from 'src/components';
import { loadUserCredentialsToRedux, setUserCredentials } from 'src/helpers';
import { navigationReset } from 'src/navigation';

interface ResponseProps {
  refresh_token: string;
  access_token: string;
}

/**
 * The function saves the user credentials (refresh_token) to the keychain
 * @param response {token:"xxxx"}
 */
async function saveUserCredentials(response: ResponseProps) {
  // Set the storage credentials to the keychain
  await setUserCredentials(response.refresh_token);
  // Load credentials to the redux
  await loadUserCredentialsToRedux();
  // set access_token
  api.setToken(response.access_token);
}

/**
 * If inputs are filled, connect to the server
 * and try to login with given inputs.
 * If login is succesfull, navigate user to the main page.
 *
 * @param email : user email
 * @param password : user password
 */
export async function login(email: string, password: string) {
  const response: any = await LoginRequest(email, password);
  if (!response?.access_token) {
    Toast(response, false);
  } else {
    await saveUserCredentials(response);
    navigationReset('Main');
  }
}

export interface InputProp {
  name: 'email' | 'password';
  placeHolder: string;
  type: string;
  errors: string;
  rules: Object;
  iconName: string;
  isSecureInput: boolean;
}
export const inputArray: Array<InputProp> = [
  {
    name: 'email',
    placeHolder: i18next.t('pages.loginPage.input.email'),
    type: 'textinput',
    errors: i18next.t('pages.loginPage.error.email'),
    rules: { required: true },
    iconName: 'envelope',
    isSecureInput: false,
  },
  {
    name: 'password',
    placeHolder: i18next.t('pages.loginPage.input.password'),
    type: 'textinput',
    errors: i18next.t('pages.loginPage.error.password'),
    rules: { required: true },
    iconName: 'key',
    isSecureInput: true,
  },
];
