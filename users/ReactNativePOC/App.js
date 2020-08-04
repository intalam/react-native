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

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './shared/redux/reducer';

import HomeScreen from './components/Home';
import Contacts from './components/Contacts';
import Camera from './components/Camera';

import Users from './components/users';
import UserRenderProp from './components/UserRenderProp';
import UserProfile from './components/UserProfile';
import GeoLocation from './components/GeoLocation';

let store = createStore(reducer);


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User List" component={Users} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="User RenderProp" component={UserRenderProp} />
          <Stack.Screen name="User Profile" component={UserProfile} />
          {/* <Stack.Screen name="Notification" component={Notify} /> */}
          {/* <Stack.Screen name="FAD - WebView" component={FadWebView}/> */}
          <Stack.Screen name="GeoLocation" component={GeoLocation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
