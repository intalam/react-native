import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './components/Home';
import Camera from './components/Camera';

import Doctors from './components/doctors';
import DoctorRenderProp from './components/DoctorRenderProp';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fad" component={Doctors} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="FAD RenderProp" component={DoctorRenderProp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  text: {
    fontSize: 26,
    /* textBreakStrategy: 'simple', */
  }
});
