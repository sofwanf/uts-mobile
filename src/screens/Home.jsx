import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

const Home = ({}) => {
  const [fruit, setFruit] = useState('');
  const [fruitList, setFruitList] = useState([]);

  const addFruit = () => {
    if (fruit) {
      setFruitList([...fruitList, {key: fruit}]);
      setFruit('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Buah</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Buah"
        value={fruit}
        onChangeText={text => setFruit(text)}
      />
      <Button title="Tambah Buah" onPress={addFruit} />
      <FlatList
        data={fruitList}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
});
