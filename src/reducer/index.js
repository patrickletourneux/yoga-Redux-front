import { combineReducers } from 'redux';
import userReducer from './user';
import handlePositionsReducer from './handlePositions';

const rootReducer = combineReducers({
  user: userReducer,
  positions: handlePositionsReducer,
});

export default rootReducer;