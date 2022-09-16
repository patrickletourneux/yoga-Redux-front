import {
  INITIALISE_USER,
  CHANGE_INPUT,
  CHANGE_DATA_USER,
  CHANGE_USER_NOTIFICATION,
}
  from '../../actions/user';

export const initialState = {
  id: undefined,
  pseudonym: '',
  email: '',
  password: '',
  isUserConnected: false,
  errorMessageSigninFormular: '',
  errorMessageSignupFormular: '',
  errorStatusCode: '',
  notification: '',
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
    case CHANGE_USER_NOTIFICATION: {
      return {
        ...state,
        notification: action.notification,
      };
    }
    default:
      return state;
  }
};

export default reducer;
