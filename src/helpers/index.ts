export { formatDate, getNumberOfDay } from './date';
export {
  call,
  getGPSLocation,
  getValueText,
  getDirection,
  getObjectValue,
  goWebsite,
  objectValueChange,
  ramdaObjectValueChange,
} from './functions';
export { findPhotos, findVideos } from './imageFunctions';
export { default as isAuthenticated } from './isAuthenticated';
export { getLanguage, loadLanguageToRedux, setLanguage } from './language';

export { default as setOneSignal } from './setOneSignal';
export { capitalize } from './string';

export { changeTheme, getTheme, loadThemeToRedux, setTheme } from './theme';
export { default as tokenRefresher } from './tokenRefresher';
export {
  getUserCredentials,
  deleteUserCredentials,
  loadUserCredentialsToRedux,
  logout,
  setUserCredentials,
} from './userCredentials';
export { default as updateDeviceId } from './updateDeviceId';
