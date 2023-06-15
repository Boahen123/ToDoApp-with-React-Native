import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default TodoItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.item}>
        <MaterialIcons
          name="delete"
          size={25}
          color="black"
          onPress={() => handlePress(item.key)}
        />
        <Text style={styles.todoText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: 'coral',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  todoText: {
    marginLeft: 10,
    fontSize: 20,
  },
});
