import OneSignal from 'react-native-onesignal';
import store from '@src/store';
import { authAddDevice } from '@src/store/auth';

/**
 * Sometimes device id can be undefined.
 * The function controls that deviceId is defined or not,
 * If device id is not defined, update device id and return it.
 * @returns device id
 */
async function update() {
  return OneSignal.getDeviceState().then((state: any) => {
    store.dispatch(authAddDevice(state.userId)); // Update deviceId from reducer
    return state.userId;
  });
}

export default update;
