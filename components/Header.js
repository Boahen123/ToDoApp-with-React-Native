import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Exporting a functional component named `Header` that returns a `View` containing a `Text` component
with the text "My Todos". */
export default Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    padding: 20,
    backgroundColor: 'coral',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
