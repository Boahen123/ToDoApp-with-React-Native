import React from 'react';
import { StyleSheet, TextInput, View, Button, Keyboard } from 'react-native';
import { useState } from 'react';

export default AddItem = ({ submitInput }) => {
  const [userInput, setuserInput] = useState('');

  return (
    <View>
      <TextInput
        multiline
        style={styles.textInput}
        placeholder="new activity to do..."
        onChangeText={setuserInput}
        onPressIn={() => {
          Keyboard.addListener('keyboardDidShow', () => {
            console.log('keyboard activated.');
          });
        }}
      />
      <Button
        title="Add Todo"
        color="coral"
        onPress={() => {
          submitInput(userInput);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 2,
    borderColor: 'coral',
    borderRadius: 10,
    height: 50,
  },
});
