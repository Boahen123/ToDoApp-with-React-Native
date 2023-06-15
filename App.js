import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'peach', key: '4' },
    { name: 'frog', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'toad', key: '7' },
    { name: 'toad', key: '8' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((element) => {
          return (
            <View key={element.key}>
              <Text style={styles.element}>{element.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  element: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
