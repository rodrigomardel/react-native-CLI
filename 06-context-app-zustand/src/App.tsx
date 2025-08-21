import React from 'react'
import { BottomTabNavigator } from './presentation/navigation/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}