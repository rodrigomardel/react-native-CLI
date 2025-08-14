import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../../themes';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({ name = 'World' }: Props) => {
  return (
    <View style={commonStyles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={commonStyles.title}>Hello, {name}</Text>
    </View>
  );
};
