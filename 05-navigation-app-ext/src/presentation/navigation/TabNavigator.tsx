import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../types/navigation';
import { HomeScreen, ProfileScreen, SettingsScreen } from '../screens';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarStyle: {
          backgroundColor: globalColors.background,
          borderTopColor: '#e0e0e0',
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: globalColors.primary,
        },
        headerTintColor: globalColors.background,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 28,
          textAlign: 'center',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerTitle: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 
              name="house" 
              size={size} 
              color={color} 
              iconStyle="solid" 
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          headerTitle: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 
              name="user" 
              size={size} 
              color={color} 
              iconStyle="solid" 
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          headerTitle: 'Configuración',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 
              name="gear" 
              size={size} 
              color={color} 
              iconStyle="solid" 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
