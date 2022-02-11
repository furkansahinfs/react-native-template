import React from 'react';
import { StackNavigation } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer ref={navigationRef}>{StackNavigation()}</NavigationContainer>
    </StoreProvider>
  );
}
