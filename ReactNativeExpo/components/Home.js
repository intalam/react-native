import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.itemContainer}>
        <Text style={styles.item} onPress={() => navigation.navigate('Fad')}>FAD</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.item} onPress={() => navigation.navigate('Camera')}>Camera</Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  item: {
    width: '50%',
    backgroundColor: '#00539b',
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  }
});