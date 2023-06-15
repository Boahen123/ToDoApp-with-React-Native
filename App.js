import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'peach', key: '4' },
    { name: 'frog', key: '5' },
    { name: 'here', key: '6' },
    { name: 'toad', key: '7' },
    { name: 'toad', key: '8' },
  ]);

  const pressHandler = (key) => {
    console.log(key);
    setPeople((prev) => {
      return prev.filter((person) => person.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.element}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

/* <ScrollView>
    {people.map((element) => {
      return (
        <View key={element.key}>
          <Text style={styles.element}>{element.name}</Text>
        </View>
      );
    })}
  </ScrollView> */

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
    marginHorizontal: 10,
  },
});
