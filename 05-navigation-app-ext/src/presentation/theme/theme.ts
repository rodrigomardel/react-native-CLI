import { StyleSheet } from "react-native";

export const globalColors = {
  primary: '#7B1FA2',
  secondary: '#FF5252',
  tertiary: '#0D47A1',
  chassis: '#C27FE8',
  warning: '#FFEB3B',
  danger: '#D32F2F',
  dark: '#000000',
  background: '#FFFFFF',
  text: '#000000',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },
  title: {
    color: globalColors.primary,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: globalColors.secondary,
    fontSize: 16,
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 10,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: globalColors.background,
  },
});
