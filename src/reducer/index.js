import { 
  CHANGE_SEARCH_TEXT , 
  CHANGE_FILTERED_POSITIONS , 
  INITIALISE_FILTERED_POSITIONS
} 
from '../actions';

import data from '../data/yoga_api';

const initialState = {
  allPositions : data,
  searchText :"",
  filteredPositions: data,
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
    case CHANGE_FILTERED_POSITIONS: {
      console.log('reducer CHANGE_FILTERED_POSITIONS');
      const filteredPositionsSanskrit = state.allPositions.filter((item) => {
        return item.sanskrit_name.toLowerCase().includes(state.searchText.toLowerCase())
      });
      const filteredPositionsEnglish = state.allPositions.filter((item) => {
        return item.english_name.toLowerCase().includes(state.searchText.toLowerCase())
      });
      const filteredPositionsSanskritEnglish = [...filteredPositionsSanskrit,...filteredPositionsEnglish];
      const filteredPositionsSanskritEnglishwithoutDouble = [...new Set(filteredPositionsSanskritEnglish)]
      
      return {
        ...state,
        filteredPositions : [...filteredPositionsSanskritEnglishwithoutDouble]
      };
    }
    case INITIALISE_FILTERED_POSITIONS: {
      console.log('reducer INITIALISE_FILTERED_POSITIONS');      
      return {
        ...state,
        filteredPositions : state.allPositions
      };
    }
    default:
      return state;
  }
};

export default reducer;
