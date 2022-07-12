// import { CHANGE_MESSAGE, ADD_MESSAGE_TO_MESSAGES } from '../actions';

import data from '../data/yoga_api';

const initialState = {
  data : data,
};

// le reducer est une fonction qui prend le state courant et l'action courante
// en paramètre, en fonction de l'action le reducer va retourner un nouveau state
// sa responsabitlité sera de retourner un state
// traducteur d'intention en modification de state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case CHANGE_MESSAGE: {
    //   console.log('reducer CHANGE_MESSAGE');
    //   return {
    //     ...state,
    //     message: action.message,
    //   };
    // }
    default:
      return state;
  }
};

export default reducer;
