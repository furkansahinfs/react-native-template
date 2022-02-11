import api, { RefreshToken } from '../api';
import { getUserCredentials, loadUserCredentialsToRedux, setUserCredentials } from '.';
import { deleteUserCredentials } from './userCredentials';
import { navigate } from '../navigation';

/**
 * Get a new token from server and save it to the keychain
 * and update redux
 *
 */
async function tokenRefresher() {
  // get user credentials from redux
  const userCredentials = getUserCredentials();
  // request new token
  const response: any = await RefreshToken(userCredentials.access_token);
  if (response?.access_token) {
    // save credentials to the keychain
    await setUserCredentials(response.access_token);
    // and set the redux with new data
    await loadUserCredentialsToRedux();
    // set access_token
    api.setToken(response.access_token);
    return true;
  } else {
    console.log('TokenRefresher delete', response);
    await deleteUserCredentials();
    navigate('Login');
    return false;
  }
}

export default tokenRefresher;
