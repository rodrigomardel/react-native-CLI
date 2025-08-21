import { StyleSheet } from 'react-native';

export const globalColors = {
  primary:   '#384EF5',
  secondary: '#FF9800',
  tertiary:  '#4CAF50',
  chassis:   '#6B26EB',  
  warning:   '#FFC107',
  danger:    '#E53935',
  dark:      '#212121',
  background:'#F5F5F5',
  text:      '#212121',
};


export const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: globalColors.chassis,
    textAlign: 'center',
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  primaryButton: {
    backgroundColor: '#dadada',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10
  }

})