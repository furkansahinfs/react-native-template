import { ONESIGNAL_APP_ID } from '@env';
import OneSignal from 'react-native-onesignal';
import { authAddDevice } from '../store/auth';
import store from '../store';

function setOneSignal() {
  //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId(ONESIGNAL_APP_ID);
  //END OneSignal Init Code

  OneSignal.getDeviceState().then((state) => {
    console.log(state);
    console.log('OneSignal Device ID :', state?.userId);
    if (state) {
      store.dispatch(authAddDevice(state.userId)); // Update deviceId from reducer
    }
  });

  //Prompt for push on iOS
  OneSignal.promptForPushNotificationsWithUserResponse((response) => {
    console.log('Prompt response:', response);
  });
  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent) => {
    console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  });
}

export default setOneSignal;
