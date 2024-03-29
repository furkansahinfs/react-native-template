import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { CustomSafeAreaView } from '@src/components';
import {
  getLanguage,
  isAuthenticated,
  loadLanguageToRedux,
  loadThemeToRedux,
  setOneSignal,
} from '@src/helpers';
import { NotificationEntity } from '@src/interface';
import { navigationReset } from '@src/navigation';
import styles from './SplashPage.styles';

const SplashPage = () => {
  let isAuth = false;
  let hasSelectedLang = false;
  let loadMain = false;

  useEffect(() => {
    (async () => {
      await init();
      handleNotifications();
    })();
  });

  async function init() {
    setOneSignal();
    // load theme from AsyncStorage to redux
    await loadThemeToRedux();
    await loadLanguageToRedux();
    await getAppLanguage();
  }

  function handleNotifications() {
    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler((notificationJSON: any) => {
      console.log('OneSignal: notification opened:', notificationJSON);
      const notificationEntity: NotificationEntity = {
        content: notificationJSON.notification.body,
        heading: notificationJSON.notification.title,
        id: notificationJSON.notification.notificationId,
        parking_name: null,
        read: false,
        section_name: null,
        sent_at: new Date().toISOString(),
        sent_by: 'OneSignal',
      };
      console.log(notificationEntity);
    });
  }

  /**
   * Control that there exists a selected language in the Redux,
   * If there is no lang, make hasSelectedLang false
   * and navigate user to the LanguagePage to select language
   * If there is a selected lang, control the authentication.
   * According to that, navigate user to the LoginPage or MainPage
   */
  async function getAppLanguage() {
    try {
      // get language
      const value = getLanguage();
      hasSelectedLang = value !== '';
      if (!value) {
        navigateUser();
      } else {
        await authControl();
        navigateUser();
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Control that user has credentials in Redux
   * If he/she has, set isAuth true. Else set false.
   */
  async function authControl() {
    const hasAuth = await isAuthenticated();
    isAuth = hasAuth;
    loadMain = hasAuth;
  }

  /**
   * If there is no selected lang, navigate user to the LanguagePage
   * If lang is selected but user is not authenticated, navigate user to the LoginPage,
   * If all OK, navigate user to the MainPage
   */
  function navigateUser() {
    if (!hasSelectedLang) {
      navigationReset('Language', { page: 'Splash' });
    } else if (!isAuth) {
      navigationReset('Login');
    } else if (loadMain) {
      navigationReset('Main');
    }
  }

  return (
    <CustomSafeAreaView>
      <View style={styles.view}>
        <Text style={styles.headText}>Template</Text>
      </View>
    </CustomSafeAreaView>
  );
};
export default SplashPage;
