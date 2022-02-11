import { Toast } from '../../../components';
import { I18N } from '../../../locales/language';
import api, { LoginRequest } from '../../../api';
import { loadUserCredentialsToRedux, setUserCredentials } from '../../../helpers';
import { navigationReset } from '../../../navigation';

/**
 * The function controls that given email and password to login are empty or not
 * If empty, display a Toast
 * @param email
 * @param password
 * @returns validation result : boolean
 */
function validateLoginInputs(email: string, password: string) {
  let errorMessage = '';
  if (!email) {
    errorMessage += I18N.t('loginPage.emptyEmail') + '\n';
  }

  if (!password) {
    errorMessage += I18N.t('loginPage.emptyPassword') + '\n';
  }

  const isValidated = !errorMessage;
  if (!isValidated) {
    errorMessage = errorMessage.replace(/\n$/, '');
    Toast(errorMessage, true);
    return false;
  }

  return true;
}

interface ResponseProps {
  token: string;
}

/**
 * The function saves the user credentials (access_token) to the keychain
 * @param response {token:"xxxx"}
 */
async function saveUserCredentials(response: ResponseProps) {
  // Set the storage credentials to the keychain
  await setUserCredentials(response.token);
  // Load credentials to the redux
  await loadUserCredentialsToRedux();
  // set access_token
  api.setToken(response.token);
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
  if (validateLoginInputs(email, password)) {
    const response: any = await LoginRequest(email, password);
    if (!response?.token) {
      Toast(response, false);
    } else {
      await saveUserCredentials(response);
      navigationReset('Main');
    }
  }
}
