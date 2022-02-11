import DocumentPicker from 'react-native-document-picker';
import {
  ProfileInfoRequest,
  ProfilePictureRequest,
  SetProfileInfoRequest,
  UpdateProfileInfoRequest,
} from '../../../api';
import { FileProps, ProfileData } from '../../../assets';
import { deleteUserCredentials, loadThemeToRedux, setTheme } from '../../../helpers';
import { navigationReset } from '../../../navigation';

/**
 * Remove the user credentials from the AsyncStorage
 * and redux, navigate user to the splash screen
 */
export async function logout() {
  await deleteUserCredentials();
  navigationReset('Splash');

  // Delete device id from db
  /*await LogoutRequest().then(async (result: any) => {
    if (result) {
      await deleteUserCredentials();
      navigationReset('Splash');
    } else {
      Toast(result, false);
    }
  });*/
}

/**
 * Get profile information from api
 *
 */
export async function getProfileData() {
  return await ProfileInfoRequest();
}

/**
 * Pick image using DocumentPicker
 * @returns DocumentPickerResponse | null
 */
export async function pickImage() {
  // Pick one file
  try {
    return await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.images],
    });
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
      return null;
    } else {
      return null;
    }
  }
}

/**
 * Send the selected image to the API to save image as profile picture
 * @param photo FileProps
 * @returns boolean
 */
export async function setPicture(photo: FileProps | undefined) {
  if (photo !== undefined) {
    return await ProfilePictureRequest(photo);
  }
}

/**
 * Send the profile info to the API to save
 * @param info ProfileData
 */
export async function saveProfileData(info: ProfileData) {
  return await SetProfileInfoRequest(info);
}

/**
 * Send the updated profile info to the API to save
 * @param info ProfileData
 */
export async function updateProfileData(info: ProfileData) {
  return await UpdateProfileInfoRequest(info);
}

/**
 * The function sets theme choice for Redux and AsyncStorage
 * @param isDarkMode boolean
 */
export async function setAppTheme(isDarkMode: boolean) {
  await setTheme(isDarkMode ? 'DARK' : 'LIGHT').then(async () => {
    await loadThemeToRedux();
  });
}
