import React from 'react';

import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

import { getUserById, getPhotoUrl } from '../shared/user-utils';

const UserProfile = (props) => {

  const id = new URLSearchParams(useLocation().search).get('id');
  const u = getUserById(id);

  return (
    <>
      {
        !u && <h1>No user found having this ID</h1>
      }
      {
        !!u && <>
          <div>
            <img src={getPhotoUrl(u)} />
            <div>{u.firstName} {u.lastName}</div>
            <div >{u.jobTitle}</div>
          </div>
        </>
      }
    </>
  )
};

export default UserProfile;