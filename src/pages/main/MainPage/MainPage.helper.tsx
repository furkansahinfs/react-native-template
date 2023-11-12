import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { GetMarkersRequest } from '@src/api';
import { TestData } from '@src/assets';
import { Toast } from '@src/components';
import { MarkerLessDetailedProps, PositionProps, RegionProps } from '@src/interface';
import { i18next } from '@src/locales';

export async function getMarkers(coordinates: PositionProps) {
  const result = await GetMarkersRequest(coordinates, 'LESS');
  return result.data instanceof Array ? result : [];
}

export function calculateScreenPolygon(reg: RegionProps) {
  const localPosition = {
    tlat: reg.latitude + reg.latitudeDelta / 2,
    blat: reg.latitude - reg.latitudeDelta / 2,
    llng: reg.longitude - reg.longitudeDelta / 2,
    rlng: reg.longitude + reg.longitudeDelta / 2,
  };

  return localPosition;
}

/**
 * The function gets the user's location from GPS
 * and return it
 * @returns Promise resolve -> location
 */
export async function findLocation() {
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

/**
 * The function does zoom to the selected marker
 * @param map
 * @param marker
 */
export function fitToMarker(
  map: any, // type is any because I cannot find the exact type
  marker: {
    latitude: number;
    longitude: number;
  },
) {
  if (map) {
    let markerRegion = {
      latitude: marker.latitude,
      longitude: marker.longitude,
      latitudeDelta: 0.0025,
      longitudeDelta: 0.0025,
    };

    map.current.animateToRegion(markerRegion, 500);
  }
}

/**
 * The function gets the location of user
 * and sets the necessary variables
 * @param setRegion : setRegion from MainPage
 * @param mapRef : map's useRef() from MainPage
 */
export async function findCoordinates(setRegion: (result: RegionProps) => void, mapRef: any) {
  await findLocation()
    .then((result: any) => {
      if (result) {
        setRegion(result);
        console.log('result', result);
        fitToMarker(mapRef, {
          latitude: result.latitude,
          longitude: result.longitude,
        });
      } else {
        setRegion(TestData.initialRegion);
      }
    })
    .catch(error => {
      Toast(error, false);
    });
}

/**
 * The function runs after clicking a marker,
 * map is zoomed to the selected marker
 *
 * @param marker : selectedMarker
 * @param mapRef : map's useRef from MainPage
 */
export function handleMarkerChange(marker: MarkerLessDetailedProps, mapRef: any) {
  fitToMarker(mapRef, {
    latitude: marker.point.lat,
    longitude: marker.point.lng,
  });
}

/**
 * The function updates position variable
 * while region is changing
 * @param reg : RegionProps
 * @param setPosition : setPosition from MainPage
 */
export function handleRegionChange(reg: RegionProps, setPosition: (result: PositionProps) => void) {
  setPosition({
    tlat: reg.latitude + reg.latitudeDelta / 2,
    blat: reg.latitude - reg.latitudeDelta / 2,
    llng: reg.longitude - reg.longitudeDelta / 2,
    rlng: reg.longitude + reg.longitudeDelta / 2,
  });
}
