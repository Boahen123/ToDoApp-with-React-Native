import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Sandbox</Text>
      <Text style={styles.box2}>Sandbox</Text>
      <Text style={styles.box3}>Sandbox</Text>
      <Text style={styles.box4}>Sandbox</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#ddd',
  },
  box1: {
    backgroundColor: 'violet',
    padding: 10,
  },
  box2: {
    backgroundColor: 'gold',
    padding: 10,
  },
  box3: {
    backgroundColor: 'silver',
    padding: 10,
  },
  box4: {
    backgroundColor: 'red',
    padding: 10,
  },
});
