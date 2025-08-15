import { View, StyleSheet } from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
      <View style={[styles.box, styles.box4]}/>
      <View style={[styles.box, styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
      <View style={[styles.box, styles.box4]}/>
      <View style={[styles.box, styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
      <View style={[styles.box, styles.box4]}/>
      <View style={[styles.box, styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
      <View style={[styles.box, styles.box4]}/>
      <View style={[styles.box, styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
      <View style={[styles.box, styles.box4]}/>
      <View style={[styles.box, styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
      <View style={[styles.box, styles.box4]}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    // gap: 10,
    // columnGap: 10,
  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'red',
    // top: -100,
  },
  box2: {
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: 'green',
    // bottom: -100,
    alignSelf: 'center',
  },
  box4: {
    backgroundColor: 'yellow',
    alignSelf: 'flex-end',
  },
});