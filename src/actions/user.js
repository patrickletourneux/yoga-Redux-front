// Action types
// on place le nom de nos action dans des variables
// on nomme la variable comme la string
// - gestion des erreurs
// - auto-complétion

export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT_SIGNUP_FORMULAR = 'SUBMIT_SIGNUP_FORMULAR';
export const SUBMIT_SIGNIN_FORMULAR = 'SUBMIT_SIGNIN_FORMULAR';
export const INITIALISE_USER = 'INITIALISE_USER';
export const CHANGE_DATA_USER = 'CHANGE_DATA_USER';
export const DELETE_USER = 'DELETE_USER';
export const CHANGE_USER_NOTIFICATION = 'CHANGE_USER_NOTIFICATION';

// Action creators
// fonction qui renvoie un objet de type action

export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  value,
  name,
});
export const submitSignupFormular = (pseudonym, email, password) => ({
  type: SUBMIT_SIGNUP_FORMULAR,
  pseudonym,
  email,
  password,
});
export const submitSigninFormular = (email, password) => ({
  type: SUBMIT_SIGNIN_FORMULAR,
  email,
  password,
});
export const initialiseUser = () => ({
  type: INITIALISE_USER,
});
export const changeDataUser = (modificationsObject) => ({
  type: CHANGE_DATA_USER,
  modificationsObject,
});
export const deleteUser = (id) => ({
  type: DELETE_USER,
  id,
});
export const ChangeUserNotification = (notification) => ({
  type: CHANGE_USER_NOTIFICATION,
  notification,
});
