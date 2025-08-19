import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
};

export const PrimaryButton = ({ label, onPress }: PrimaryButtonProps) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={globalStyles.primaryButton}>
      <Text style={globalStyles.primaryButtonText}>{label}</Text>
    </Pressable>
  )
};