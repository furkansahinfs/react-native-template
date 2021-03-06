import * as React from 'react';
import {
  AddressPage,
  ForgetPasswordAndActivationPage,
  LanguagePage,
  LoginPage,
  SignupPage,
  SplashPage,
} from '../pages';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
      <Stack.Screen
        name="ForgetPasswordAndActivation"
        component={ForgetPasswordAndActivationPage}
      />
      <Stack.Screen name="Language" component={LanguagePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Main" component={DrawerNavigation} />
      <Stack.Screen name="Signup" component={SignupPage} />
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="Address" component={AddressPage} />
    </Stack.Navigator>
  );
}

export default MyStack;
