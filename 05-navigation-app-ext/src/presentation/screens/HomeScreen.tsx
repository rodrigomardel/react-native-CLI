import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../types/navigation';
import { globalStyles, globalColors } from '../theme/theme';

type Props = BottomTabScreenProps<TabParamList, 'HomeTab'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      
      <View style={styles.contentContainer}>
        <View style={styles.featureList}>
          <Text style={styles.featureTitle}>Características:</Text>
          <Text style={styles.featureItem}>• react-native v0.73.0</Text>
          <Text style={styles.featureItem}>• react-native-paper v5.14.5</Text>
          <Text style={styles.featureItem}>• react-native-vector-icons v12.2.0</Text>
          <Text style={styles.featureItem}>• react-native-screens v3.27.0</Text>
          <Text style={styles.featureItem}>• @react-navigation/native v6.1.9</Text>
          <Text style={styles.featureItem}>• @react-native-vector-icons/fontawesome6 v12.2.0</Text>
          <Text style={styles.featureItem}>• react-native-paper v5.14.5</Text>
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
