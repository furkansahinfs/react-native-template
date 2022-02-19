import * as Keychain from 'react-native-keychain';
import api, { LogoutRequest } from '../api';
import { Toast } from '../components';
import { navigationReset } from '../navigation';
import store from '../store';
import { authAddToken, authRemoveToken } from '../store/auth';

/**
 * Get the user credentials using redux
 * {refresh_token: string, deviceid: string}
 *
 */
export function getUserCredentials() {
  return store.getState().userCredentials;
}

/**
 * That function runs at first load of app / after login process
 * Get the user credentials from keychain and load to the redux
 *
 */
export async function loadUserCredentialsToRedux() {
  const refresh_token_keychain = await Keychain.getInternetCredentials('CREDENTIALS');
  if (refresh_token_keychain) {
    store.dispatch(authAddToken(refresh_token_keychain.password)); // Update user credentials from reducer
  } else {
    store.dispatch(authRemoveToken()); // Clear refresh token of user credentials from reducer
    api.setToken(''); // set api token
  }
}

/**
 * Get the refresh_token as parameter
 * Save it to the keychain
 *
 * @param refresh_token
 */
export async function setUserCredentials(refresh_token: string) {
  // Store the credentials
  await Keychain.setInternetCredentials('CREDENTIALS', 'refresh_token', refresh_token);
}

/**
 * Delete the user credentials from the keychain
 * and update the Redux
 *
 */
export async function deleteUserCredentials() {
  // delete data in keychain
  await Keychain.resetInternetCredentials('CREDENTIALS');
  store.dispatch(authRemoveToken());
  api.setToken('');
}

/**
 * Remove the user credentials from the AsyncStorage
 * and redux, navigate user to the splash screen
 */
export async function logout() {
  // Delete device id from db
  await LogoutRequest().then(async (result: any) => {
    if (result === true) {
      await deleteUserCredentials();
      navigationReset('Splash');
    } else {
      Toast(result, false);
    }
  });
}
