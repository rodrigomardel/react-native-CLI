import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { globalStyles, globalColors } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const SettingsDetailScreen: React.FC<Props> = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const [biometricEnabled, setBiometricEnabled] = React.useState(true);
  const [autoSyncEnabled, setAutoSyncEnabled] = React.useState(false);
  const [locationEnabled, setLocationEnabled] = React.useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = React.useState(false);
  const [backupEnabled, setBackupEnabled] = React.useState(true);
  const [updatesEnabled, setUpdatesEnabled] = React.useState(true);

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>⚙️ Configuración Avanzada</Text>
      <Text style={globalStyles.subtitle}>Personalización completa</Text>
      
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
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Notificaciones por email</Text>
            <Switch
              value={false}
              onValueChange={() => {}}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={globalColors.primary}
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
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Tamaño de fuente grande</Text>
            <Switch
              value={false}
              onValueChange={() => {}}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={globalColors.primary}
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
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Verificación en dos pasos</Text>
            <Switch
              value={true}
              onValueChange={() => {}}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={globalColors.primary}
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
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Solo con WiFi</Text>
            <Switch
              value={true}
              onValueChange={() => {}}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={globalColors.primary}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacidad</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Compartir ubicación</Text>
            <Switch
              value={locationEnabled}
              onValueChange={setLocationEnabled}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={locationEnabled ? globalColors.primary : '#f4f3f4'}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Analytics y métricas</Text>
            <Switch
              value={analyticsEnabled}
              onValueChange={setAnalyticsEnabled}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={analyticsEnabled ? globalColors.primary : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sistema</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Copia de seguridad automática</Text>
            <Switch
              value={backupEnabled}
              onValueChange={setBackupEnabled}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={backupEnabled ? globalColors.primary : '#f4f3f4'}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Actualizaciones automáticas</Text>
            <Switch
              value={updatesEnabled}
              onValueChange={setUpdatesEnabled}
              trackColor={{ false: '#767577', true: globalColors.chassis }}
              thumbColor={updatesEnabled ? globalColors.primary : '#f4f3f4'}
            />
          </View>
        </View>

        <TouchableOpacity 
          style={globalStyles.primaryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.primaryButtonText}>Guardar y Volver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
