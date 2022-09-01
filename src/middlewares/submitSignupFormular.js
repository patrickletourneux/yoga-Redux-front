import api from '../axiosInstance';

import {
  changeDataUser,
  initialiseUser,
}
  from '../actions/user';

const submitSignupFormular = (store) => (next) => (action) => {
  // console.log('submitSignupFormular middleware', action);

  switch (action.type) {
    case 'SUBMIT_SIGNUP_FORMULAR':
      api.post('users', {
        pseudonym: action.pseudonym,
        email: action.email,
        password: action.password,
      }).then((response) => {
        console.log('submit signup formular response.data', response.data);
        store.dispatch(initialiseUser());
      })
        .catch((error) => {
          console.log('error ', error);
          store.dispatch(changeDataUser(
            {
              errorMessageSignupFormular: error.response.data.message,
            },
          ));
        });
      break;
    default:
      next(action);
  }
};

export default submitSignupFormular;
