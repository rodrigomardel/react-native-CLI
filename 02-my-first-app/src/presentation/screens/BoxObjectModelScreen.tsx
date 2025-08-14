import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
      <View style={styles.purpleBox}></View>
      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Box 1</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    title: {
      fontSize: 20,
      borderWidth: 10,
      paddingHorizontal: 30,
      paddingVertical: 20,
    },
    purpleBox: {
      backgroundColor: '#5856D6',
      height: 30,
      margin: 20,
      padding: 5,
    }
});