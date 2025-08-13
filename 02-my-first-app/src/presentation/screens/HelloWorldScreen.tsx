import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({ name = 'World' }: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>Hello, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
