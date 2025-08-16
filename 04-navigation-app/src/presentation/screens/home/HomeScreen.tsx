import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Products: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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

