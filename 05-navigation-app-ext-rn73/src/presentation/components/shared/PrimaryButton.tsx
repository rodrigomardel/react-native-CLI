import * as React from 'react';
import { Button } from 'react-native-paper';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  icon: string;
} 

const PrimaryButton = ({ title, onPress, icon }: PrimaryButtonProps) => (
  <Button icon={icon} mode="contained" onPress={onPress}>
    {title}
  </Button>
);

export default PrimaryButton;