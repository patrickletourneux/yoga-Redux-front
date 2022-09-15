import api from '../axiosInstance';

import {
  changeDataUser,
}
  from '../actions/user';

const submitSigninFormular = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SUBMIT_SIGNIN_FORMULAR':
      api.post('signin', {
        email: action.email,
        password: action.password,
      }).then((response) => {
        console.log('submit signin formular response.data', response.data);
        store.dispatch(changeDataUser(
          {
            id: response.data.user.id,
            password: '',
            isUserConnected: true,
            errorMessageSigninFormular: '',
            pseudonym: response.data.user.pseudonym,
          },
        ));
        sessionStorage.setItem('tokenJWT', `Bearer ${response.data.token}`);
      })
        .catch((error) => {
          console.log('error ', error);
          store.dispatch(changeDataUser(
            { errorMessageSigninFormular: error.response.data.message },
          ));
        });

      break;
    default:
      next(action);
  }
};

export default submitSigninFormular;
