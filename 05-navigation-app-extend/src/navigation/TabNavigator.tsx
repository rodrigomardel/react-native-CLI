import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NewPostScreen from '../screens/NewPostScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderTopColor: '#dbdbdb',
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#8e8e93',
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <FontAwesome6 
                name={focused ? 'house' : 'house'} 
                size={24} 
                color={color}
                solid={focused}
              />
            ),
          }}
        />
        
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <FontAwesome6 
                name={focused ? 'magnifying-glass' : 'magnifying-glass'} 
                size={24} 
                color={color}
                solid={focused}
              />
            ),
          }}
        />
        
        <Tab.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <FontAwesome6 
                name={focused ? 'plus-square' : 'plus-square'} 
                size={24} 
                color={color}
                solid={focused}
              />
            ),
          }}
        />
        
        <Tab.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <FontAwesome6 
                name={focused ? 'comment' : 'comment'} 
                size={24} 
                color={color}
                solid={focused}
              />
            ),
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <FontAwesome6 
                name={focused ? 'user' : 'user'} 
                size={24} 
                color={color}
                solid={focused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
