import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import NotifyOnLoad from './NotifyOnLoad';


export default function HomeScreen({ navigation }) {
  return (
    <>
      <NotifyOnLoad/>
      
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('User List')}>User List</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('User RenderProp')}>User List - using RenderProp</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('Contacts')}>Contacts</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('GeoLocation')}>Show My GeoLocation</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('Camera')}>Camera</Text>
        </View>
      </View>
        {/* <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('Notification')}>Notification</Text>
        </View> */}
        {/* <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('fad-webview')}>FAD - WebView</Text>
        </View> */}
        {/* <FadWebView/>
      </View> */}
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1, justifyContent: 'space-between',
    width: '80%',
    maxWidth: '100%',
    backgroundColor: '#00539b',
    marginLeft: 10,
    marginRight: 10,
  },
  item: {
    color: '#eee',
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  }
});