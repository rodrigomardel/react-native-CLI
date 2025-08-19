import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';
import {TabNavigator} from './TabNavigator';
import {ProfileDetailScreen, SettingsDetailScreen} from '../screens';
import {globalColors} from '../theme/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: globalColors.primary,
          },
          headerTintColor: globalColors.background,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileDetailScreen}
          options={{ title: 'Perfil Detallado' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsDetailScreen}
          options={{ title: 'Configuración Detallada' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
