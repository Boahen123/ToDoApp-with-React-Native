import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Papa Kofi');
  const [age, setAge] = useState(20);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={(value) => {
          setName(value);
        }}
      />

      <Text>Enter age:</Text>
      <TextInput
        inputMode="numeric"
        style={styles.input}
        onChangeText={(value) => {
          setAge(value);
        }}
        placeholder="e.g 25"
      />

      <Text style={{ fontSize: 20 }}>
        {' '}
        name: {name} age: {age}{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 190,
  },
});
