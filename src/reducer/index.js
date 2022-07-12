import { 
  CHANGE_SEARCH_TEXT , 
  CHANGE_FILTERED_POSITIONS , 
  INITIALISE_FILTERED_POSITIONS,
  ADD_FAVORITE_POSITION,
  DELETE_FAVORITE_POSITION
} 
from '../actions';

import data from '../data/yoga_api';

const initialState = {
  allPositions : data,
  searchText :"",
  filteredPositions: data,
  favoritePositions:[]
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
    case ADD_FAVORITE_POSITION: {
      console.log('reducer ADD_FAVORITE_POSITION');
      const position = state.allPositions.find((item) => item.id.toString() === action.id);
      let positions = [...state.favoritePositions];
      positions.push(position);
      // delete double
      positions = [...new Set(positions)];
      return {
        ...state,
        favoritePositions : positions

      };
    }
    case DELETE_FAVORITE_POSITION: {
      console.log('reducer DELETE_FAVORITE_POSITION');      
      const positions = state.favoritePositions.filter((item) => item.id.toString() !== action.id);
      return {
        ...state,
        favoritePositions : positions
      };
    }
    default:
      return state;
  }
};

export default reducer;
