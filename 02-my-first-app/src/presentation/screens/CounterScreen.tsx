import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { commonStyles } from '../../styles';
import { PrimaryButton } from '../components';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    console.log('increment');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>{counter}</Text>
      <PrimaryButton
        label="Incrementar"
        onPress={increment}
        onLongPress={() => setCounter(0)}
      />

      {/*
      // Ejemplo de cómo se hace con Pressable
      <Pressable
        style={({pressed}) => [
          localStyles.button,
          pressed && localStyles.buttonPressed,
        ]}
        onPress={increment}
        onLongPress={() => setCounter(0)}
      >
        <Text style={localStyles.buttonText}>Incrementar</Text>
      </Pressable> */}
    </View>
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
