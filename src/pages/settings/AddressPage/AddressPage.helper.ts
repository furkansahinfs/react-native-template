import { Alert } from 'react-native';
import { I18N } from '../../../locales';
import { RegionProps } from '../../../assets/interfaces';

/**
 * Get user address information if exists from api
 */
export async function getUserAddress() {
  //return await GetSchoolBusStopsRequest(schoolBusId, new Date(selectedDate), direction.toString());
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

export function selectLocation(param: any) {
  const lat = param.event.nativeEvent.coordinate.latitude;
  const lon = param.event.nativeEvent.coordinate.longitude;
  param.setSelectedLocation({
    latitude: lat,
    longitude: lon,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  param.fitToMarker(param.mapRef, {
    latitude: lat,
    longitude: lon,
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
