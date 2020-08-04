import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import {SET_USERS, setUsers} from '../shared/redux/actions';

import { getUsersList, getPhotoUrl, filterByText } from '../shared/user-utils';
import { Link } from 'react-router-dom';
import users from '../shared/users';

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
    <div className="App">

      <div>
        <div className="head">Users {!isLoading && ('( ' + num + ' match Found )')}</div>
        <h2>Users filtered by: {searchBy}</h2>
        <div>
          <input
            className="input"
            onChange={e => getUsersOnType(e.target.value)}
            value={searchBy}
            placeholder={'Type to get users'}
          />
        </div>

        <div>
          <input
            className="input"
            onChange={e => onChangeText(e.target.value)}
            value={filterBy}
            placeholder={'Type to get users'}
          />
        </div>

        {
          isLoading && <div><h1>Loading...</h1></div>
        }
        {
          !isLoading && filteredUsers && !filteredUsers.length && <>
            <div><div style={{ fontSize: 20, color: '#00539b' }}>No Match Found</div></div>
          </>
        }

        {
          !isLoading && filteredUsers && filteredUsers.map((u) => {
            return (
              <div key={u.id}>
                <Link className="photo-link" to={"/user-profile?id="+u.id}>
                  <img src={getPhotoUrl(u)} />
                </Link>
                <Link className="title-link" to={"/user-profile?id="+u.id}>
                  <div>{u.firstName} {u.lastName}</div>
                </Link>

                <div style={{ textAlign: 'center' }}>{u.jobTitle}</div>

                {/*<div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>Duke</div> Health Provider</div>*/}

              </div>
            )
          })
        }

      </div>


    </div>
  );
};

export default Users;
