import React, { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';

import {
	SafeAreaView,
	ScrollView,
	TextInput,
	Linking,
	View, Text, StyleSheet, Image, TouchableHighlight,
	Platform
} from 'react-native';

export default function App() {
	const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Contact, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
					console.log('contacts', data);
					setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.parentContainer}>
			<ScrollView style={styles.scrollView}>
				{/*<View style={styles.headerContainer}>
					<Text style={styles.head}>Users {!isLoading && ('( ' + num + ' match Found )')}</Text>

					<Input
						style={styles.input}
						onChangeText={text => getUsersOnType(text)}
						value={searchBy}
						placeholder={'Type to get user'}
					/>

					<Input
						style={styles.input}
						onChangeText={text => onChangeText(text)}
						value={filterBy}
						placeholder={'Type keyword to filter result'}
					/>
				</View>*/}

				{
					/*isLoading && <IndicatorActivity />*/
				}
				{
					/*!isLoading && !filteredUsers.length && <>
						<View><Text style={{ fontSize: 20, color: '#00539b' }}>No Match Found</Text></View>
					</>*/
				}
				{
					contacts.map((c) => {
						return (
							c.name !== "null null" &&  <View key={c.id} style={styles.container}>

								<View style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									marginBottom: 15,
									flexDirection: 'row',
									flexWrap: 'wrap',
								}}>
								</View>

								<Text
									style={
										{ color: '#00539b', textAlign: 'center' }
									}
								>
									{c.name !== "null null" && c.name}
								</Text>

								<Text
									style={
										{ color: '#00539b', textAlign: 'center' }
									}
								>
									{
										Array.isArray(c.phoneNumbers)&& c.phoneNumbers.length > 0 && c.phoneNumbers[0].number
									}
								</Text>

							</View>
						);
					})
				}
			</ScrollView>
		</SafeAreaView>
  );
}

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