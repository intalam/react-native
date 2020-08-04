import usersArray from '../users';
import {SET_USERS} from './actions';
const defaultState = {users: usersArray};


export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case SET_USERS:
      let newState = {...state};
      newState.users = action.users;
      return newState;
    default:
      return {...state};
  }
}