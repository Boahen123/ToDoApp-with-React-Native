import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default TodoItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'coral',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    height: 50,
  },
});
