import React from 'react';

import { View, Text, Image, Button, StyleSheet, Linking } from 'react-native';

import { getUsersList, getPhotoUrl, filterByText } from '../shared/user-utils';

const UserProfile = ({ route, navigation, ...props }) => {

  const { user: u = {} } = route.params;

  return (
    <View style={styles.container}>

      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <Image source={{ uri: getPhotoUrl(u) }}
          resizeMode={'cover'}
          style={{
            alignSelf: 'center',
            height: 200,
            width: 150,
            borderWidth: 1,
          }}
          onPress={() => navigation.navigate('User Profile')}
        />
      </View>

      <Text
        style={
          { color: '#00539b', textAlign: 'center', fontSize: 25, }
        }
        onPress={() => navigation.navigate('User Profile')}
      >
        {u.firstName} {u.lastName}
      </Text>

      <Text style={{ textAlign: 'center', fontSize: 20, }}>{u.jobTitle}</Text>

      {/*<Text style={{ textAlign: 'center', fontSize: 20, }}><Text style={{ fontWeight: 'bold' }}>Duke</Text> Health Provider</Text>

      <Text style={{ textAlign: 'center', fontSize: 20, }}>
        Rating {d.fts_field_patient_satisfaction_score}
      </Text>

      <Text style={{ textAlign: 'center', fontSize: 20, }}>
        Total Rating  {d.its_field_total_responses}
      </Text>

      <NotifyDoctorAppointment u={u}/>*/}

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    textAlign: 'center',
    marginTop: 30
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
});

export default UserProfile;