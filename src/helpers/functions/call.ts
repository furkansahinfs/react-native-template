import { Linking } from 'react-native';

/**
 * The function provides to call given phone if exists
 * @param phone : string
 */
function call(phone : string) {
  if (phone) {
    Linking.openURL(`tel:${phone}`);
  }
}

export default call;
