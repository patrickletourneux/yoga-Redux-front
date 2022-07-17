import axios from 'axios';

const submitSignupFormular = (store) => (next) => (action) => {
  console.log('submitSignupFormular middleware', action);
  switch(action.type){
    case 'SUBMIT_SIGNUP_FORMULAR':
        console.log('to send axios')
        axios.post('http://localhost:3001/api/v1/users', {
        pseudonym: action.userPseudonym,
        email: action.userEmail,
        password: action.userPassword,
        }).then((response) => {
            console.log('response.data',response.data)
            next(action);
        })
        .catch((error) => console.log('error ',error));
        break;
    default:
        next(action);
  }

  
};



export default submitSignupFormular;