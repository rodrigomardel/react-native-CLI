/* eslint-disable react/react-in-jsx-scope */
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }: PrimaryButtonProps) => {

  return (
     <Pressable
     style={({pressed}) => [
       localStyles.button,
       pressed && localStyles.buttonPressed,
     ]}
     onPress={onPress}
     onLongPress={onLongPress}
   >
     <Text style={localStyles.buttonText}>{label}</Text>
   </Pressable>
  );
};

const localStyles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : '#5856d6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: Platform.OS === 'ios' ? 'black' : 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonPressed: {
    backgroundColor: '#4746ab',
  },
});
