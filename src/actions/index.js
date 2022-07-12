// Action types
// on place le nom de nos action dans des variables
// on nomme la variable comme la string
// - gestion des erreurs
// - auto-complétion
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
export const CHANGE_FILTERED_POSITIONS = 'CHANGE_FILTERED_POSITIONS';
export const INITIALISE_FILTERED_POSITIONS = 'INITIALISE_FILTERED_POSITIONS';

// Action creators
// fonction qui renvoie un objet de type action

export const changeSearchText = (searchText) => ({
  type: CHANGE_SEARCH_TEXT,
  // le payload de l'action nous est fournit depuis le paramètre "direction"
  // direction: direction,
  // on passe en propriété raccourcie
  searchText,
});
export const changeFilteredPositions = (searchText) => ({
  type: CHANGE_FILTERED_POSITIONS,
  // le payload de l'action nous est fournit depuis le paramètre "direction"
  // direction: direction,
  // on passe en propriété raccourcie
  searchText,
});
export const initialiseFilteredPositions = (searchText) => ({
  type: INITIALISE_FILTERED_POSITIONS,
});


