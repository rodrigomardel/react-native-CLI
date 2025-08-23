import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './presentation/navigation/StackNavigation';

/**
 * Main application component that configures navigation
 * @returns {JSX.Element} Navigation container with StackNavigation
 */
export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
