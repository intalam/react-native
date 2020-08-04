import React, { useState, useEffect } from 'react';

import usersArray from './users';

import {getUsersList, getPhotoUrl, filterByText} from './user-utils';

var timeout = null;
const UserComponent = (props) => {

	const [users, setUsers] = useState(usersArray);
	const [filteredUsers, setFilteredUsers] = useState(usersArray);
	const [searchBy, setSearchBy] = useState('');
	const [filterBy, setFilterBy] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [num, setNum] = useState(0);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = (text = '') => {
		clearTimeout(timeout);
		setIsLoading(true);
		timeout = setTimeout(() => {
			let filteredUser = getUsersList(text);
			setNum(filteredUser.length);
			setFilteredUsers(filteredUser);
			setIsLoading(false);
		}, 1000);

	};

	const onChangeText = (text) => {
		setFilterBy(text);
		setFilteredUsers(filterByText(users, text));
	};

	const getUsersOnType = (text) => {
		setSearchBy(text);
		getUsers(text);
	};

	return (
    props.render({users, filteredUsers, searchBy, filterBy, isLoading, num, onChangeText, getUsersOnType, getPhotoUrl})
	);
};

export default UserComponent;
