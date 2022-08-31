import api from '../axiosInstance';

import {
  changeErrorMessageSignupFormular,
}
  from '../actions/user';

const submitSignupFormular = (store) => (next) => (action) => {
  // console.log('submitSignupFormular middleware', action);

  switch (action.type) {
    case 'SUBMIT_SIGNUP_FORMULAR':
      api.post('users', {
        pseudonym: action.userPseudonym,
        email: action.userEmail,
        password: action.userPassword,
      }).then((response) => {
        console.log('submit signup formular response.data', response.data);
        store.dispatch(changeErrorMessageSignupFormular(''));
      })
        .catch((error) => {
          console.log('error ', error);
          store.dispatch(changeErrorMessageSignupFormular(error.response.data.message));
        });
      break;
    default:
      next(action);
  }
};

export default submitSignupFormular;
