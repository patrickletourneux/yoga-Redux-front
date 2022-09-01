import api from '../axiosInstance';

import {
  changeIsUserConnectedToTrue,
  changeErrorMessageSigninFormular,
  initialisePasswordToEmptyString,
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
        store.dispatch(changeIsUserConnectedToTrue(true, response.data.user));
        store.dispatch(changeErrorMessageSigninFormular(''));
        store.dispatch(initialisePasswordToEmptyString());
        sessionStorage.setItem('tokenJWT', `bearer ${response.data.token}`);
      })
        .catch((error) => {
          console.log('error ', error);
          store.dispatch(changeErrorMessageSigninFormular(error.response.data.message));
        });

      break;
    default:
      next(action);
  }
};

export default submitSigninFormular;
