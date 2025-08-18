/**
 * Mi Nuevo Proyecto - React Native 0.73.0
 * Con React Navigation
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { AppNavigator } from './src/presentation/navigation/AppNavigator';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <AppNavigator />
    </>
  );
}

export default App;
