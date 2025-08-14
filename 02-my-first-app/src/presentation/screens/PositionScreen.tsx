import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}/>
      <View style={styles.orangeBox}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'relative',
    top: -50,
  },
  orangeBox: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    top: 0,
    left: -100,
  },
});