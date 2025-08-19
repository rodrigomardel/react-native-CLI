import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { globalStyles, globalColors } from '../theme/theme';
import PrimaryButton from '../components/shared/PrimaryButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const ProfileDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { userId } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información Personal</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>Rodrigo Martínez Delgado</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>rodrigo.mardel.daw@gmail.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Teléfono:</Text>
            <Text style={styles.value}>+34 666 666 666</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Ubicación:</Text>
            <Text style={styles.value}>Burgos, España</Text>
          </View>
        </View> 

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia Profesional</Text>
          <View style={styles.experienceItem}>
            <Text style={styles.jobTitle}>Full Stack Developer</Text>
            <Text style={styles.company}>TechCorp - 2021 - Presente</Text>
            <Text style={styles.description}>
              Desarrollo de aplicaciones móviles multiplataforma con React Native.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>React Native</Text>
            <Text style={styles.skill}>TypeScript</Text>
            <Text style={styles.skill}>JavaScript</Text>
            <Text style={styles.skill}>Git</Text>
            <Text style={styles.skill}>Angular</Text>
            <Text style={styles.skill}>Bootstrap</Text>
            <Text style={styles.skill}>Spring Boot</Text>
            <Text style={styles.skill}>MySQL</Text>
            <Text style={styles.skill}>Docker</Text>
            <Text style={styles.skill}>Git</Text>
            <Text style={styles.skill}>GitHub</Text>  
          </View>
        </View>

        {/* <TouchableOpacity 
          style={globalStyles.primaryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.primaryButtonText}>Volver</Text>
        </TouchableOpacity> */}
        <PrimaryButton title="Volver" icon="keyboard-return" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: globalColors.primary,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: globalColors.text,
  },
  value: {
    fontSize: 16,
    color: globalColors.primary,
  },
  experienceItem: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: globalColors.primary,
    marginBottom: 5,
  },
  company: {
    fontSize: 14,
    color: globalColors.secondary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: globalColors.text,
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skill: {
    backgroundColor: globalColors.chassis,
    color: globalColors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    fontSize: 14,
    fontWeight: '500',
  },
});
