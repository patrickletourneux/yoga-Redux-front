
import api from '../axiosInstance';

import { 
  changeIsUserConnectedToTrue,
  changeErrorMessage
 } 
from '../actions'

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
        store.dispatch(changeIsUserConnectedToTrue(true, response.data.user));
        store.dispatch(changeErrorMessage(''));
        next(action);
        
      })
      .catch((error) => {
        console.log('error ',error);
        console.log('error.response.data.message ',error.response.data.message);
        store.dispatch(changeErrorMessage(error.response.data.message));
        })

        // next(action);
        break
    default:
        next(action);
  }
};



export default submitSigninFormular;