import * as React from 'react';
import {
  ForgetPasswordAndActivationPage,
  LanguagePage,
  LoginPage,
  SignupPage,
  SplashPage,
} from '../pages';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ForgetPasswordAndActivation"
        component={ForgetPasswordAndActivationPage}
      />
      <Stack.Screen name="Language" component={LanguagePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Main" component={TabNavigation} />
      <Stack.Screen name="Signup" component={SignupPage} />
      <Stack.Screen name="Splash" component={SplashPage} />
    </Stack.Navigator>
  );
}

export default MyStack;
