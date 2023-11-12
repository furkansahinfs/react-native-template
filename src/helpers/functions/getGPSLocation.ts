import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { i18next } from '@src/locales';

/**
 * The function gets the user's location from GPS
 * and return it
 * @returns Promise resolve -> location
 */
async function getGPSLocation() {
  return new Promise(async (resolve, reject) => {
    try {
      //If not granted, ask for grant
      let granted: boolean = false;
      if (Platform.OS === 'ios') {
        const iosPermission = await Geolocation.requestAuthorization('always');
        granted = iosPermission === 'granted';
      } else if (Platform.OS === 'android') {
        const androidPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        granted = androidPermission === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (granted) {
        Geolocation.getCurrentPosition(
          position => {
            const location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 1,
              longitudeDelta: 1,
            };
            resolve(location);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            reject(i18next.t('locationPermissionDenied'));
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      } else {
        console.log('MainPage - Location : Permission denied');
        reject(i18next.t('locationPermissionDenied'));
      }
    } catch (err) {
      console.log('gps err', err);
      reject(i18next.t('locationPermissionDenied'));
    }
  });
}

export default getGPSLocation;
