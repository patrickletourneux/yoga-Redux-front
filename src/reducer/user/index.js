import { 
    CHANGE_IS_USER_CONNECTED_TO_TRUE,
    INITIALISE_USER,
    CHANGE_ERROR_MESSAGE_SIGNIN_FORMULAR,
    CHANGE_ERROR_MESSAGE_SIGNUP_FORMULAR,
    CHANGE_INPUT,
  } 
  from '../../actions';
   
  const initialState = {
    userPseudonym :"",
    userEmail :"",
    userPassword :"",
    isUserConnected :false,
    errorMessageSigninFormular :"",
    errorMessageSignupFormular :"",
    errorStatusCode:"",
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_INPUT: {
        console.log('reducer CHANGE_INPUT');
        return {
          ...state,
          [action.name]: action.value,
        };
      }
      case CHANGE_IS_USER_CONNECTED_TO_TRUE: {
        console.log('reducer CHANGE_IS_USER_CONNECTED_TO_TRUE');
        return {
          ...state,
          isUserConnected: true,
        };
      }
      case CHANGE_ERROR_MESSAGE_SIGNIN_FORMULAR: {
        console.log('reducer CHANGE_ERROR_MESSAGE_SIGNIN_FORMULAR');
        return {
          ...state,
          errorMessageSigninFormular: action.errorMessage,
        };
      }
      case CHANGE_ERROR_MESSAGE_SIGNUP_FORMULAR: {
        console.log('reducer CHANGE_ERROR_MESSAGE_SIGNUP_FORMULAR');
        return {
          ...state,
          errorMessageSignupFormular: action.errorMessage,
        };
      }
      case INITIALISE_USER: {
        console.log('reducer INITIALISE_USER');
        return {
          ...initialState,
        };
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  