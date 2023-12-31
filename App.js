// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'buy coffee', key: '2' },
    { text: 'buy coffee', key: '3' },
  ]);

  const submitHandler = (userInput) => {
    if (userInput) {
      setTodos((prevTodos) => {
        return [{ text: userInput, key: uuidv4() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        'Text field empty',
        'Please enter an activity',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK clicked'),
          },
          {
            text: 'Cancel',
            onPress() {
              console.log('cancel clicked');
            },
          },
        ],
        {
          cancelable: true,
          onDismiss: () => console.log('alert closed by tapping outside'),
        }
      );
    }
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        Keyboard.addListener('keyboardDidHide', () => {
          console.log('keyboard hidden');
        });
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddItem submitInput={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} handlePress={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
