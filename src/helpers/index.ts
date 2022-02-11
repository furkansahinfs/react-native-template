export { formatDate, getNumberOfDay } from './date';
export { call, getDirection, goWebsite } from './functions';
export { default as isAuthenticated } from './isAuthenticated';
export {
  getUserCredentials,
  deleteUserCredentials,
  loadUserCredentialsToRedux,
  setUserCredentials,
} from './userCredentials';
export { default as setOneSignal } from './setOneSignal';
export { getLanguage, loadLanguageToRedux, setLanguage } from './language';
export { capitalize } from './string';
export { default as tokenRefresher } from './tokenRefresher';
export { getTheme, loadThemeToRedux, setTheme } from './theme';
export { default as updateDeviceId } from './updateDeviceId';
