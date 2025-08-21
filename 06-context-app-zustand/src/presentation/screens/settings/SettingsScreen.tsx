import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../../config/app-theme'
import { PrimaryButton } from '../../components/PrimaryButton'
import { useCounterStore } from '../profile/counter-store'

export const SettingsScreen = () => {
  const count = useCounterStore((state) => state.count);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text style={[styles.sectionTitle, {marginBottom: 30}]}>{count}</Text>
      <PrimaryButton style={{marginBottom: 10}} title="Incrementar" mode="elevated" onPress={() => {
        useCounterStore.getState().incrementBy(1);
      }} />
      <PrimaryButton style={{marginBottom: 10}} title="Decrementar" mode="elevated" onPress={() => {
        useCounterStore.getState().incrementBy(-1);
      }} />
      <PrimaryButton title="Resetear" mode="contained-tonal" onPress={() => {
        useCounterStore.getState().reset();
      }} />
    </View>
  )
}