import api from '../axiosInstance';

import {
  initialiseUser,
  changeDataUser,
}
  from '../actions/user';

const deleteUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'DELETE_USER':
      api.delete(`users/${action.id}`)
        .then((response) => {
          store.dispatch(initialiseUser());
          store.dispatch(changeDataUser(
            {
              notification: 'utilisateur supprimmé',
            },
          ));
          sessionStorage.clear();
        })
        .catch((error) => {
          console.log('error ', error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default deleteUserMiddleware;
