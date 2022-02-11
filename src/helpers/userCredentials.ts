import * as Keychain from 'react-native-keychain';
import api from '../api';
import store from '../store';
import { authAddToken, authRemoveToken } from '../store/auth';

/**
 * Get the user credentials using redux
 * {access_token: string, deviceid: string}
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
  const access_token_keychain = await Keychain.getInternetCredentials('CREDENTIALS');
  if (access_token_keychain) {
    store.dispatch(authAddToken(access_token_keychain.password)); // Update user credentials from reducer
  } else {
    store.dispatch(authRemoveToken()); // Clear access token of user credentials from reducer
    api.setToken(''); // set api token
  }
}

/**
 * Get the access_token as parameter
 * Save it to the keychain
 *
 * @param access_token
 */
export async function setUserCredentials(access_token: string) {
  // Store the credentials
  await Keychain.setInternetCredentials('CREDENTIALS', 'access_token', access_token);
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
