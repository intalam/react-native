import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	ScrollView,
	TextInput,
	Linking,
	View, Text, StyleSheet, Image, TouchableHighlight,
	Platform
} from 'react-native';

import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {SET_USERS, setUsers} from '../shared/redux/actions';

import { Input } from 'react-native-elements';

import IndicatorActivity from './activityIndicator';

import { getUsersList, getPhotoUrl, filterByText } from '../shared/user-utils';

var timeout = null;
const Users = ({ navigation, ...props }) => {

	const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const filteredUsers = useSelector(state => state.users);
	const [searchBy, setSearchBy] = useState('');
	const [filterBy, setFilterBy] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const num = useSelector(state => state.users.length);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = (text = '') => {
		clearTimeout(timeout);
		setIsLoading(true);
		timeout = setTimeout(() => {
			let filteredUser = getUsersList(text);
			dispatch(setUsers(filteredUser));
			setIsLoading(false);
		}, 1000);

	};

	const onChangeText = (text) => {
		setFilterBy(text);
		dispatch(setUsers(filterByText(users, text)));
	};

	const getUsersOnType = (text) => {
		setSearchBy(text);
		getUsers(text);
	};

	return (
		<SafeAreaView style={styles.parentContainer}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.headerContainer}>
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

								<View style={{flex: 1}}>
									<TouchableHighlight
										onPress={() => navigation.navigate('User Profile', { user: u })}
									>
										<Image source={{ uri: getPhotoUrl(u) }}
											resizeMode={'cover'}
											style={{
												alignSelf: 'center',
												height: 120,
												width: 100,
												borderWidth: 1,
											}}
										/>
									</TouchableHighlight>
								</View>

								<View style={{flex: 2, justifyContent: 'space-between'}}>

									<Text
										style={
											{ color: '#00539b', textAlign: 'left' }
										}
										onPress={() => navigation.navigate('User Profile', { user: u })}
									>
										{u.firstName} {u.lastName}
									</Text>

									<Text style={{ textAlign: 'left', marginTop: 10 }}>{u.jobTitle}</Text>

									<TouchableHighlight
										style={styles.submit}
										underlayColor='#fff'
										onPress={() => navigation.navigate('User Profile', { user: u })}
									>
										<Text style={styles.submitText}>View Profile</Text>
									</TouchableHighlight>
									</View>	

							</View>
						);
					})
				}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	parentContainer: {
		display: 'flex',
		textAlign: 'center'
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
		marginBottom: 25,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	container: {
		/*display: 'flex',
		textAlign: 'center',
		marginTop: 30*/
		flex: 1,
		flexDirection: 'row',
		marginBottom: 30
	},
	head: {
		fontSize: 22,
		textAlign: 'center',
		borderBottomColor: '#00539b',
		borderBottomWidth: 1,
		color: '#00539b',
		marginBottom: 20,
		paddingTop: 10,
		paddingBottom: 10,
		width: '100%',
	},
	submit: {
		marginTop: 15,
		paddingTop: 8,
		paddingBottom: 8,
		backgroundColor: 'transparent',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#00539b',
		width: '80%'
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
