
import api from '../axiosInstance';

import { 
  changeIsUserConnectedToTrue,
  changeErrorMessageSigninFormular
 } 
from '../actions/user'

const submitSigninFormular = (store) => (next) => (action) => {
  switch(action.type){
    case 'SUBMIT_SIGNIN_FORMULAR':
        api.post('signin', {
          email: action.userEmail,
          password: action.userPassword,
        }).then((response) => {
        console.log('submit signin formular response.data',response.data)
        store.dispatch(changeIsUserConnectedToTrue(true, response.data.user));
        store.dispatch(changeErrorMessageSigninFormular(''));
        next(action);
        
      })
      .catch((error) => {
        console.log('error ',error);
        console.log('error.response.data.message ',error.response.data.message);
        store.dispatch(changeErrorMessageSigninFormular(error.response.data.message));
      })

      break
    default:
        next(action);
  }
};



export default submitSigninFormular;