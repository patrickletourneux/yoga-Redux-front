import axios from 'axios';

const submitSigninFormular = (store) => (next) => (action) => {
  console.log('submitSignupFormular middleware', action);
  switch(action.type){
    case 'SUBMIT_SIGNIN_FORMULAR':
        console.log('to send axios')
        break
    default:
        next(action);
  }
};



export default submitSigninFormular;