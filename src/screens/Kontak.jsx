import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Kontak = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nama" style={styles.input} />
      <TextInput
        placeholder="Nope"
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );
};

export default Kontak;

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: 'gray',
    marginBottom: 20,
    borderRadius: 20,
    color: 'black',
    padding: 8,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});
