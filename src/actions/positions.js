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
export const INITIALISE_DATA_POSITION = 'INITIALISE_DATA_POSITION';

// Action creators
// fonction qui renvoie un objet de type action

export const changeSearchText = (searchText) => ({
  type: CHANGE_SEARCH_TEXT,
  // le payload de l'action nous est fournit depuis le paramètre "direction"
  // direction: direction,
  // on passe en propriété raccourcie
  searchText,
});
export const initialiseFilteredPositions = () => ({
  type: INITIALISE_FILTERED_POSITIONS,
});
export const addFavoritePosition = (id) => ({
  type: ADD_FAVORITE_POSITION,
  id,
});
export const deleteFavoritePosition = (id) => ({
  type: DELETE_FAVORITE_POSITION,
  id,
});
export const changeDetailPosition = (id) => ({
  type: CHANGE_DETAIL_POSITION,
  id,
});
export const initialiseDataPosition = () => ({
  type: INITIALISE_DATA_POSITION,
});
