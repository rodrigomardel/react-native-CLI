import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

interface PrimaryButtonProps {
  title: string,
  onPress?: () => void,
  icon?: string,
  mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal',
  style?: StyleProp<ViewStyle>,
} 

export const PrimaryButton = ({ title, onPress, icon, mode, style }: PrimaryButtonProps) => (
  <Button icon={icon} mode={mode} onPress={onPress} style={style}>
    {title}
  </Button>
);