import React from 'react';

import UserComponent from '../shared/UserComponent';

function UserListRenderProps() {
  return (
    <div className="App">
      <UserComponent render={({ users, filteredUsers, searchBy, filterBy, isLoading, num, onChangeText, getUsersOnType, getPhotoUrl }) => {
        return (
          <div>
            <div className="head">Users {!isLoading && ('( ' + num + ' match Found )')}</div>
            <h2>Users filtered by: {searchBy}</h2>
            <div>
              <input
                className="input"
                onChange={e => getUsersOnType(e.target.value)}
                value={searchBy}
                placeholder={'Type to get user'}
              />
            </div>

            <div>
              <input
                className="input"
                onChange={e => onChangeText(e.target.value)}
                value={filterBy}
                placeholder={'Type to get user'}
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
                  <div>
                    <img src={getPhotoUrl(u)} />
                    <div>{u.firstName} {u.lastName}</div>

                    <div style={{ textAlign: 'center' }}>{u.jobTitle}</div>

                    {/*<div style={{ textAlign: 'center' }}><div style={{ fontWeight: 'bold' }}>Duke</div> Health Provider</div>*/}

                  </div>
                )
              })
            }

          </div>
        )
      }} />

    </div>
  );
}

export default UserListRenderProps;
