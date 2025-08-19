import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Products: undefined;
};

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      
      <PrimaryButton 
        label='Ir al Perfil'
        onPress={() => navigation.navigate('Profile')}
      /> 
       <PrimaryButton 
        label='Products'
        onPress={() => navigation.navigate('Products')}
      /> 
    </View>
  )
}

