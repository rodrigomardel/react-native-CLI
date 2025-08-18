import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList, RootStackParamList } from '../../types/navigation';
import { globalStyles, globalColors } from '../theme/theme';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'SettingsTab'>,
  NativeStackScreenProps<RootStackParamList>
>;

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const [biometricEnabled, setBiometricEnabled] = React.useState(true);
  const [autoSyncEnabled, setAutoSyncEnabled] = React.useState(false);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>⚙️ Configuración</Text>
      <Text style={globalStyles.subtitle}>Personaliza tu experiencia</Text>
      
      <View style={styles.settingsContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notificaciones</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Notificaciones push</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={notificationsEnabled ? globalColors.primary : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Apariencia</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Modo oscuro</Text>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={darkModeEnabled ? globalColors.primary : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Seguridad</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Autenticación biométrica</Text>
            <Switch
              value={biometricEnabled}
              onValueChange={setBiometricEnabled}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={biometricEnabled ? globalColors.primary : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sincronización</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Sincronización automática</Text>
            <Switch
              value={autoSyncEnabled}
              onValueChange={setAutoSyncEnabled}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={autoSyncEnabled ? globalColors.primary : '#f4f3f4'}
            />
          </View>
        </View>

        <TouchableOpacity 
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={globalStyles.primaryButtonText}>Configuración Avanzada</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    backgroundColor: globalColors.background,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: globalColors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: globalColors.primary,
    marginBottom: 15,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 16,
    color: globalColors.text,
  },
});
