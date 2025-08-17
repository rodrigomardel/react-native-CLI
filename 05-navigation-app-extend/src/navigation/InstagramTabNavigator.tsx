import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NewPostScreen from '../screens/NewPostScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const InstagramTabNavigator = () => {
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
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 24, color }}>
                {focused ? '🏠' : '🏠'}
              </Text>
            ),
          }}
        />
        
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 24, color }}>
                {focused ? '🔍' : '🔍'}
              </Text>
            ),
          }}
        />
        
        <Tab.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 24, color }}>
                {focused ? '➕' : '➕'}
              </Text>
            ),
          }}
        />
        
        <Tab.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 24, color }}>
                {focused ? '💬' : '💬'}
              </Text>
            ),
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Text style={{ fontSize: 24, color }}>
                {focused ? '👤' : '👤'}
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default InstagramTabNavigator;
