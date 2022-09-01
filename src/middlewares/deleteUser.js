import api from '../axiosInstance';

// import {
//   deleteUser,
// }
//   from '../actions/user';

const deleteUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'DELETE_USER':
      console.log('dans middleware delete user');
      // api.post('signin', {
      //   email: action.email,
      //   password: action.password,
      // }).then((response) => {
      //   console.log('submit signin formular response.data', response.data);
      //   store.dispatch(changeDataUser(
      //     {
      //       id: response.data.user.id,
      //       password: '',
      //       isUserConnected: true,
      //       errorMessageSigninFormular: '',
      //       pseudonym: response.data.user.pseudonym,
      //     },
      //   ));
      //   sessionStorage.setItem('tokenJWT', `bearer ${response.data.token}`);
      // })
      //   .catch((error) => {
      //     console.log('error ', error);
      //     store.dispatch(changeDataUser(
      //       { errorMessageSigninFormular: error.response.data.message },
      //     ));
      //   });
      next(action);
      break;
    default:
      next(action);
  }
};

export default deleteUserMiddleware;
