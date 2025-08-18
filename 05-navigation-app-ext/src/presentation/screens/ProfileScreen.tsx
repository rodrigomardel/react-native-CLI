import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList, RootStackParamList } from '../../types/navigation';
import { globalStyles, globalColors } from '../theme/theme';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'ProfileTab'>,
  NativeStackScreenProps<RootStackParamList>
>;

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>👤 Perfil</Text>
      <Text style={globalStyles.subtitle}>Información del usuario</Text>
      
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatar}>👤</Text>
        </View>
        
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Juan Pérez</Text>
          <Text style={styles.userEmail}>juan.perez@email.com</Text>
          <Text style={styles.userRole}>Desarrollador React Native</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>25</Text>
            <Text style={styles.statLabel}>Proyectos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Commits</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Años</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('Profile', { userId: '123' })}
        >
          <Text style={globalStyles.primaryButtonText}>Ver Perfil Detallado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginVertical: 30,
  },
  avatar: {
    fontSize: 80,
    textAlign: 'center',
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: globalColors.primary,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: globalColors.text,
    marginBottom: 5,
  },
  userRole: {
    fontSize: 14,
    color: globalColors.secondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
    backgroundColor: globalColors.background,
    padding: 20,
    borderRadius: 10,
    shadowColor: globalColors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: globalColors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: globalColors.text,
    marginTop: 5,
  },
});
