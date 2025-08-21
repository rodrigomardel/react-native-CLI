import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../../config/app-theme'  
import { PrimaryButton } from '../../components/PrimaryButton'
import { useProfileStore } from '../../store/profile-store'
import { useCounterStore } from '../profile/counter-store'

export const HomeScreen = () => {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const count = useCounterStore((state) => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Text style={styles.sectionTitle}>{name}</Text>
      <Text style={[styles.sectionTitle, {marginBottom: 30}]}>{email}</Text>
      <Text style={[styles.sectionTitle, {marginBottom: 30}]}>Contador: {count}</Text>
      <PrimaryButton style={{marginBottom: 10}} title="Click me" icon="home" mode="outlined" />
      <PrimaryButton style={{marginBottom: 10}} title="Botón Text" icon="heart" mode="text" />
      <PrimaryButton style={{marginBottom: 10}} title="Botón Outlined" icon="user" mode="outlined" />
      <PrimaryButton style={{marginBottom: 10}} title="Botón Contained" icon="home" mode="contained" />
      <PrimaryButton style={{marginBottom: 10}} title="Botón Elevated" icon="star" mode="elevated" />
      <PrimaryButton style={{marginBottom: 10}} title="Botón Contained-Tonal" icon="gear" mode="contained-tonal" />
    </View>
  )
}