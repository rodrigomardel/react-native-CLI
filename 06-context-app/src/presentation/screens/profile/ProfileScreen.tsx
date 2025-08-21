import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store';
import { PrimaryButton } from '../../components/PrimaryButton';

export const ProfileScreen = () => {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const changeProfile = useProfileStore((state) => state.changeProfile);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfileScreen</Text>
      <Text style={styles.sectionTitle}>{name}</Text>
      <Text style={styles.sectionTitle}>{email}</Text>

      <PrimaryButton
        onPress={() => {
          useProfileStore.setState({
            name: 'Juan Perez González',
          });
        }}
        style={{marginTop: 30}} 
        title="Cambiar nombre" 
        mode="elevated" 
      />
         <PrimaryButton
        onPress={() => {
          useProfileStore.setState({
            email: 'juanperez@gmail.com',
          });
        }}
        style={{marginTop: 10}} 
        title="Cambiar email" 
        mode="elevated" 
      />

      <PrimaryButton
        onPress={() => {
          changeProfile('Rodrigo Martínez Delgado', 'rodrigo@gmail.com');
        }}
        style={{marginTop: 10}} 
        title="Regresar a Rodrigo" 
        mode="contained-tonal" 
      />
    </View>
  )
}