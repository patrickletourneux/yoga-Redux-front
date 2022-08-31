// Action types
// on place le nom de nos action dans des variables
// on nomme la variable comme la string
// - gestion des erreurs
// - auto-complétion
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
export const CHANGE_FILTERED_POSITIONS = 'CHANGE_FILTERED_POSITIONS';
export const INITIALISE_FILTERED_POSITIONS = 'INITIALISE_FILTERED_POSITIONS';
export const ADD_FAVORITE_POSITION = 'ADD_FAVORITE_POSITION';
export const DELETE_FAVORITE_POSITION = 'DELETE_FAVORITE_POSITION';
export const CHANGE_DETAIL_POSITION = 'CHANGE_DETAIL_POSITION';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT_SIGNUP_FORMULAR = 'SUBMIT_SIGNUP_FORMULAR';
export const SUBMIT_SIGNIN_FORMULAR = 'SUBMIT_SIGNIN_FORMULAR';
export const CHANGE_IS_USER_CONNECTED_TO_TRUE = 'CHANGE_IS_USER_CONNECTED_TO_TRUE';
export const INITIALISE_USER = 'INITIALISE_USER';
export const CHANGE_ERROR_MESSAGE_SIGNIN_FORMULAR = 'CHANGE_ERROR_MESSAGE_SIGNIN_FORMULAR';
export const CHANGE_ERROR_MESSAGE_SIGNUP_FORMULAR = 'CHANGE_ERROR_MESSAGE_SIGNUP_FORMULAR';


// Action creators
// fonction qui renvoie un objet de type action

export const changeSearchText = (searchText) => ({
  type: CHANGE_SEARCH_TEXT,
  // le payload de l'action nous est fournit depuis le paramètre "direction"
  // direction: direction,
  // on passe en propriété raccourcie
  searchText,
});
export const changeInput = (value, name ) => ({
  type: CHANGE_INPUT,
  value,
  name,
});
export const submitSignupFormular = (userPseudonym,userEmail,userPassword ) => ({
  type: SUBMIT_SIGNUP_FORMULAR,
  userPseudonym,
  userEmail,
  userPassword
});
export const submitSigninFormular = (userEmail,userPassword ) => ({
  type: SUBMIT_SIGNIN_FORMULAR,
  userEmail,
  userPassword
});
export const changeIsUserConnectedToTrue = (isUserConnected,user) => ({
  type: CHANGE_IS_USER_CONNECTED_TO_TRUE,
  isUserConnected,
  userPseudonym : user.pseudonym,
  userEmail : user.email,
  userPassword : user.password,

});
export const changeErrorMessageSigninFormular = (errorMessage) => ({
  type: CHANGE_ERROR_MESSAGE_SIGNIN_FORMULAR,
  errorMessage,
});
export const changeErrorMessageSignupFormular = (errorMessage) => ({
  type: CHANGE_ERROR_MESSAGE_SIGNUP_FORMULAR,
  errorMessage,
});
export const initialiseUser = () => ({
  type: INITIALISE_USER,
});
export const initialiseFilteredPositions = (searchText) => ({
  type: INITIALISE_FILTERED_POSITIONS,
});
export const addFavoritePosition = (id) => ({
  type: ADD_FAVORITE_POSITION,
  id : id
});
export const deleteFavoritePosition = (id) => ({
  type: DELETE_FAVORITE_POSITION,
  id: id
});
export const changeDetailPosition = (id) => ({
  type: CHANGE_DETAIL_POSITION,
  id: id
});


