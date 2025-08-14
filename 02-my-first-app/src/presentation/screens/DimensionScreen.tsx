import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import {Dimensions} from 'react-native';

// No es automatica, es la dimension de la pantalla no se actualiza al rotar la pantalla
// const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const DimensionScreen = () => {
  // Es automatica, se actualiza al rotar la pantalla
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{
          ...styles.purpleBox,
          width: windowWidth * 0.6,
        }}></View>
      </View>

      <Text style={styles.title}>
        W: {windowWidth}, H: {windowHeight}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: 300,
    width: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
});
