import { Linking, Platform } from 'react-native';

/**
 * The function provides to get a direction to the given location
 * @param latitude : number
 * @param longitude : number
 */
function getDirection(latitude:number, longitude:number) {
  const go = Platform.select({
    ios: () => {
      Linking.openURL('http://maps.apple.com/?daddr=' + latitude + ',' + longitude);
    },
    android: () => {
      Linking.openURL('http://maps.google.com/?daddr=' + latitude + ',' + longitude).catch((err) =>
        console.error('An error occurred', err),
      );
    },
  });

  if (go) {
    go();
  }
}

export default getDirection;
