import usersArray from './users';

const getUsersList = (filterBy = '') => {
	let filteredUser = [];
	
	usersArray.forEach((u) => {
    if (u.firstName.toLowerCase().indexOf(filterBy && filterBy.toLowerCase()) > -1 && u.avatar) {
      filteredUser.push(JSON.parse(JSON.stringify(u)));
    }
  });
  
  return filteredUser;
}

const getPhotoUrl = (u) => {
  let url = u.avatar;
	//return 'https://www.dukehealth.org' + (url ? url : '/themes/custom/dukehealth/images/default_physician_photo.png');
	return url;
};

const filterByText = (user, text) => {
  let filteredUser = [];
  user.forEach((u) => {
    if (u.firstName.toLowerCase().indexOf(text && text.toLowerCase()) > -1) {
      filteredUser.push(JSON.parse(JSON.stringify(u)));
    }
  });
  return filteredUser;
};

const getUserById = (id) => {
  let u = null;

  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].id == id) {
      u = usersArray[i];
      break;
    }
  }

  return u;
};

export {
	getUsersList,
	getPhotoUrl,
  filterByText,
  getUserById
}