'use strict';
import { ToastAndroid, Platform, Alert } from 'react-native';

/**
 * The function displays a toast at the bottom with given message
 * @param msg = message string
 * @param isLong = how long it stays, true = long, false = short
 */
const Toast = (msg: string, isLong: boolean) => {
  if (Platform.OS === 'android') {
    if (isLong) {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    } else {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    }
  } else {
    Alert.alert(msg);
  }
};

export default Toast;
