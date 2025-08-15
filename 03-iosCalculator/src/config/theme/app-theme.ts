import { StyleSheet } from 'react-native';

export const colors = {
  darkGray: '#1E1E1E',
  lightGray: '#71717A',
  orange: '#FF9500',
 
  textPrimary: '#FFFFFF',
  textSecondary: '#71717A',
  background: '#000000',
}

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.textPrimary,
  },
  textSecondary: {
    color: colors.textSecondary,
  },
  mainResult: {
    fontSize: 44,
    color: colors.textPrimary,
    fontWeight: '300',
    textAlign: 'right',
    marginBottom: 10,
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'right',
    marginBottom: 10,
  },
}) 