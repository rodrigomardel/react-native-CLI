import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}/>
      <View style={styles.purpleBox}/>
      <View style={styles.orangeBox}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 400,
    // width: 400,
    backgroundColor: 'lightblue',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    // top: 40,
    bottom: 0,
  },
  orangeBox: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    backgroundColor: 'darkgreen',
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});