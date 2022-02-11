import { Linking } from 'react-native';

/**
 * The function provides to open the given website if exists
 * @param url : string
 */
function goWebsite(url:string) {
  if (url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  }
}

export default goWebsite;
