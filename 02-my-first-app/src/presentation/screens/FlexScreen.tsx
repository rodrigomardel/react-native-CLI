import { View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  box1: {
    flex: 1, // 1 + 2 + 3 = 6     1/6
    backgroundColor: 'red',
  },
  box2: {
    flex: 2, // 1 + 2 + 3 = 6     2/6
    backgroundColor: 'blue',
  },
  box3: {
    flex: 3, // 1 + 2 + 3 = 6     3/6
    backgroundColor: 'green',
  },
});