export const SET_USERS = 'SET_USERS';

const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}

export {
  setUsers,
}