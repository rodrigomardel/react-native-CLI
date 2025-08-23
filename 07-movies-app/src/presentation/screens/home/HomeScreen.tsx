import React from 'react';
import { View, Text } from 'react-native';
import { useMovies } from '../../hooks/useMovies';

/**
 * Main screen that displays the list of movies currently in theaters
 * @returns JSX component with the main application view
 */
export const HomeScreen = () => {

  const { } = useMovies();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
