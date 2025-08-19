import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>ProfileScreen</Text>
      
      <PrimaryButton 
        label='Volver al Home'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
};