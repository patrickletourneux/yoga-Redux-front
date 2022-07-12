import { CHANGE_SEARCH_TEXT } from '../actions';

import data from '../data/yoga_api';

const initialState = {
  allPositions : data,
  searchText :"",
};

// le reducer est une fonction qui prend le state courant et l'action courante
// en paramètre, en fonction de l'action le reducer va retourner un nouveau state
// sa responsabitlité sera de retourner un state
// traducteur d'intention en modification de state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT: {
      console.log('reducer CHANGE_SEARCH_TEXT');
      return {
        ...state,
        searchText: action.searchText,
      };
    }
    default:
      return state;
  }
};

export default reducer;
