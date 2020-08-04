import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Linking,
  View, Text, StyleSheet, Image, TouchableHighlight,
  Platform
} from 'react-native';

import { Input } from 'react-native-elements';

import IndicatorActivity from './activityIndicator';

import UserComponent from '../shared/UserComponent';

const Users = (props) => {

  return (
    <UserComponent render={({ users, filteredUsers, searchBy, filterBy, isLoading, num, onChangeText, getUsersOnType, getPhotoUrl }) => {

      return (
        <SafeAreaView style={styles.parentContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.headerContainer}>
              <Text style={styles.head}>Users {!isLoading && ('( ' + num + ' match Found )')}</Text>

              <Input
                style={styles.input}
                onChangeText={text => getUsersOnType(text)}
                value={searchBy}
                placeholder={'Type to get users'}
              />

              <Input
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={filterBy}
                placeholder={'Type keyword to filter result'}
              />
            </View>

            {
              isLoading && <IndicatorActivity />
            }
            {
              !isLoading && !filteredUsers.length && <>
                <View><Text style={{ fontSize: 20, color: '#00539b' }}>No Match Found</Text></View>
              </>
            }
            {
              !isLoading && filteredUsers.map((u) => {
                return (
                  <View key={u.id} style={styles.container}>

                    <View style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 15,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}>
                      <TouchableHighlight
												onPress={() => navigation.navigate('User Profile', { user: u })}
											>
												<Image source={{ uri: getPhotoUrl(u) }}
													resizeMode={'cover'}
													style={{
														alignSelf: 'center',
														height: 200,
														width: 150,
														borderWidth: 1,
													}}
												/>
											</TouchableHighlight>
                    </View>

                    <Text
                      style={
                        { color: '#00539b', textAlign: 'center' }
                      }
                      onPress={() => navigation.navigate('User Profile', { user: u })}
                    >
                      {u.firstName} {u.lastName}
                    </Text>

                    <Text style={{ textAlign: 'center' }}>{u.jobTitle}</Text>

                    {/*<Text style={{ textAlign: 'center' }}><Text style={{ fontWeight: 'bold' }}>Duke</Text> Health Provider</Text>

                    <TouchableHighlight
                      style={styles.submit}
                      underlayColor='#fff'
                      onPress={() => Linking.openURL('https://dukehealth.org' + d.sm_url[0])}
                    >
                      <Text style={styles.submitText}>View Profile</Text>
                    </TouchableHighlight>*/}

                  </View>
                );
              })
            }
          </ScrollView>
        </SafeAreaView>
      )

    }} />
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    textAlign: 'center',
    marginTop: 30
  },
  scrollView: {
    paddingTop: 10,
    marginLeft: 10, marginRight: 10,
    paddingBottom: 30,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    display: 'flex',
    textAlign: 'center',
    marginTop: 30
  },
  head: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#00539b',
    color: 'white',
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00539b'
  },
  submitText: {
    color: '#00539b',
    textAlign: 'center',
  },
  input: {
    height: 40, borderColor: 'gray', borderWidth: 1,
    paddingLeft: 6, paddingRight: 20,
		/* marginLeft: 20, marginRight: 20,  */marginTop: 15, marginBottom: 15,
    fontSize: 16,
    height: 40,
  }
});

export default Users;
