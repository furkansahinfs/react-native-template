import { Alert } from 'react-native';
import { I18N } from '../../../locales';
import { RegionProps } from '../../../interface';
import { getGPSLocation } from '../../../helpers';
import { TestData } from '../../../assets';
import { Toast } from '../../../components';

/**
 * Get user address information if exists from api
 */
export async function getUserAddress() {
  return {
    latitude: 38.4237,
    longitude: 27.7828,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
}

export async function changeUserAddress(location: RegionProps) {
  console.log(location);
}

/**
 * The function does zoom to the selected marker
 * @param map
 * @param marker
 */
export function fitToMarker(map: any, marker: RegionProps) {
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
  await getGPSLocation()
    .then((result: any) => {
      if (result) {
        setRegion(result);
        fitToMarker(mapRef, {
          latitude: result.latitude,
          longitude: result.longitude,
          latitudeDelta:0,
          longitudeDelta:0
        });
      } else {
        setRegion(TestData.initialRegion);
      }
    })
    .catch((error) => {
      Toast(error, false);
    });
}

export function selectLocation(param: any) {
  const lat = param.event.nativeEvent.coordinate.latitude;
  const lng = param.event.nativeEvent.coordinate.longitude;
  param.setSelectedLocation({
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  param.fitToMarker(param.mapRef, {
    latitude: lat,
    longitude: lng,
  });
}

export async function markerClick(location: RegionProps) {
  Alert.alert(I18N.t('addressPage.changeAddress'), '', [
    { text: I18N.t('addressPage.cancel'), onPress: () => null },
    {
      text: I18N.t('addressPage.ok'),
      onPress: async () => await changeUserAddress(location),
    },
  ]);
}
