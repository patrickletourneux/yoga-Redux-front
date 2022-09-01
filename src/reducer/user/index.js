import {
  INITIALISE_USER,
  CHANGE_INPUT,
  CHANGE_DATA_USER,
}
  from '../../actions/user';

const initialState = {
  pseudonym: '',
  email: '',
  password: '',
  isUserConnected: false,
  errorMessageSigninFormular: '',
  errorMessageSignupFormular: '',
  errorStatusCode: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case CHANGE_DATA_USER: {
      return {
        ...state,
        ...action.modificationsObject,
      };
    }
    case INITIALISE_USER: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
