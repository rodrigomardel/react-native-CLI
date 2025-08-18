import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../types/navigation';
import { globalStyles, globalColors } from '../theme/theme';

type Props = BottomTabScreenProps<TabParamList, 'HomeTab'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>🏠 Inicio</Text>
      <Text style={globalStyles.subtitle}>Bienvenido a la aplicación</Text>
      
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>
          Esta es la pantalla principal de la aplicación con navegación por pestañas.
        </Text>
        
        <View style={styles.featureList}>
          <Text style={styles.featureTitle}>Características:</Text>
          <Text style={styles.featureItem}>• Navegación por pestañas</Text>
          <Text style={styles.featureItem}>• React Navigation 6</Text>
          <Text style={styles.featureItem}>• Estilos globales</Text>
          <Text style={styles.featureItem}>• TypeScript</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: globalColors.text,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  featureList: {
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
    width: '100%',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: globalColors.primary,
    marginBottom: 15,
  },
  featureItem: {
    fontSize: 16,
    color: globalColors.text,
    marginVertical: 5,
  },
});
