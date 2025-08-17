import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components'
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>SettingsScreen</Text>
      <PrimaryButton
        label='Regresar'
        onPress={() => navigation.goBack()}
      />
      <PrimaryButton
        label='Go to Home'
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  )
}