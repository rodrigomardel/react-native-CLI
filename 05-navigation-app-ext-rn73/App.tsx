/**
 * Mi Nuevo Proyecto - React Native 0.73.0
 * Con React Navigation
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { AppNavigator } from './src/presentation/navigation/AppNavigator';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </>
  );
}

export default App;
