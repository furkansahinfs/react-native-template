import { API, RefreshToken } from '@src/api';
import { navigate } from '@src/navigation';
import { deleteUserCredentials } from './userCredentials';
import { getUserCredentials, loadUserCredentialsToRedux, setUserCredentials } from '.';

/**
 * Get a new token from server and save it to the keychain
 * and update redux
 *
 */
async function tokenRefresher() {
  // get user credentials from redux
  const userCredentials = getUserCredentials();
  // request new token
  const response: any = await RefreshToken(userCredentials.refresh_token);
  if (response?.access_token) {
    // save credentials to the keychain
    await setUserCredentials(response.refresh_token);
    // and set the redux with new data
    await loadUserCredentialsToRedux();
    // set access_token
    API.setToken(response.access_token);
    return true;
  } else {
    console.log('TokenRefresher delete', response);
    await deleteUserCredentials();
    navigate('Login');
    return false;
  }
}

export default tokenRefresher;
