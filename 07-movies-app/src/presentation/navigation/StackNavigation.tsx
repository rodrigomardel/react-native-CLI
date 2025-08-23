import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';

/**
 * Types for navigation parameters between screens
 */
export type RootStackParams = {
  /** Main screen without parameters */
  Home: undefined;
  /** Details screen with movie ID */
  Details: { id: number };
};

const Stack = createStackNavigator<RootStackParams>();

/**
 * Component that configures the application's stack navigation
 * @returns Stack.Navigator with Home and Details screens configured
 */
export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};