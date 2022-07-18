
import { changeIsUserConnectedToTrue } from '../actions'

const submitSigninFormular = (store) => (next) => (action) => {
  // console.log('submitSignupFormular middleware', action);
  switch(action.type){
    case 'SUBMIT_SIGNIN_FORMULAR':
        console.log('to send axios')
        store.dispatch(changeIsUserConnectedToTrue(true));
        // next(action);
        break
    default:
        next(action);
  }
};



export default submitSigninFormular;