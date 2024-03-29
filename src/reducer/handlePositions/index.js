import {
  CHANGE_SEARCH_TEXT,
  INITIALISE_FILTERED_POSITIONS,
  ADD_FAVORITE_POSITION,
  DELETE_FAVORITE_POSITION,
  // CHANGE_DETAIL_POSITION,
  INITIALISE_DATA_POSITION,

}
  from '../../actions/positions';

import data from '../../data/yoga_api';

const initialState = {
  allPositions: data,
  searchText: '',
  favoritePositions: [],
  detailPosition: {},
};

// le reducer est une fonction qui prend le state courant et l'action courante
// en paramètre, en fonction de l'action le reducer va retourner un nouveau state
// sa responsabitlité sera de retourner un state
// traducteur d'intention en modification de state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.searchText,
      };
    }

    case INITIALISE_FILTERED_POSITIONS: {
      return {
        ...state,
        filteredPositions: state.allPositions,
      };
    }
    case ADD_FAVORITE_POSITION: {
      const position = state.allPositions.find((item) => item.id.toString() === action.id);
      let positions = [...state.favoritePositions];
      positions.push(position);
      // delete double
      positions = [...new Set(positions)];
      return {
        ...state,
        favoritePositions: positions,

      };
    }
    case DELETE_FAVORITE_POSITION: {
      const positions = state.favoritePositions.filter((item) => item.id.toString() !== action.id);
      return {
        ...state,
        favoritePositions: positions,
      };
    }
    // case CHANGE_DETAIL_POSITION: {
    //   const position = state.allPositions.find((item) => item.id.toString() === action.id);
    //   return {
    //     ...state,
    //     detailPosition: position,
    //   };
    // }
    case INITIALISE_DATA_POSITION: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
