
import api from '../axiosInstance';

import { changeIsUserConnectedToTrue } from '../actions'

const submitSigninFormular = (store) => (next) => (action) => {
  // console.log('submitSignupFormular middleware', action);
  switch(action.type){
    case 'SUBMIT_SIGNIN_FORMULAR':
        console.log('to send axios');
        api.post('signin', {
          email: action.userEmail,
          password: action.userPassword,
        }).then((response) => {
        console.log('response.data',response.data)
        store.dispatch(changeIsUserConnectedToTrue(true));
        next(action);

        })
        .catch((error) => console.log('error ',error));

        // next(action);
        break
    default:
        next(action);
  }
};



export default submitSigninFormular;