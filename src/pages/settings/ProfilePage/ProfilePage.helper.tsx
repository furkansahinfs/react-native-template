import DocumentPicker from 'react-native-document-picker';
import {
  GetProfileInfoRequest,
  SetProfilePictureRequest,
  UpdateProfileInfoRequest,
} from '../../../api';
import { FileProps, ProfileData } from '../../../assets';
import { Toast } from '../../../components';
import { I18N } from '../../../locales';

/**
 * Get profile information from api
 *
 */
export async function getProfileData() {
  return await GetProfileInfoRequest();
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
export async function setPicture(
  photo: FileProps | undefined,
  setIsChanged: (bool: boolean) => void,
) {
  if (photo !== undefined) {
    const result = await SetProfilePictureRequest(photo);
    if (result) {
      Toast(I18N.t('profilePage.profilePhotoChangedMessage'), false);
      setIsChanged(false);
    } else {
      Toast(result, false);
    }
  }
}

/**
 * Send the updated profile info to the API to save
 * @param info ProfileData
 */
export async function updateProfileData(info: ProfileData) {
  return await UpdateProfileInfoRequest(info);
}
