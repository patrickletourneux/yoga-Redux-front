// on importe createStore qui va nous permettre de créer le store
// le store = entité en charge du state, le gardien du state
import { createStore } from 'redux';
import reducer from '../reducer';

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
