import { StyleSheet } from 'react-native';

export const colors = {
  darkGray: '#1E1E1E',
  lightGray: '#71717A',
  orange: '#FF9500',
 
  textPrimary: '#FFFFFF',
  textSecondary: '#71717A',
  backgroundDark: '#000000',
}

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  text: {
    color: colors.textPrimary,
  },
  textSecondary: {
    color: colors.textSecondary,
  },
  mainResult: {
    fontSize: 60,
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
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
}) 