import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import { StackNavigation } from './src/navigation';
import { navigationRef } from './src/navigation';
import 'react-native-gesture-handler';
import store from './src/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer ref={navigationRef}>{StackNavigation()}</NavigationContainer>
    </StoreProvider>
  );
}
