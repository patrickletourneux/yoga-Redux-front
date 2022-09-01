// on importe createStore qui va nous permettre de créer le store
// le store = entité en charge du state, le gardien du state
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import userAxios from '../middlewares/userAxios';
import submitSignupFormular from '../middlewares/submitSignupFormular';
import submitSigninFormular from '../middlewares/submitSigninFormular';
import deleteUser from '../middlewares/deleteUser';

// ici si la fonction __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ existe, on viendra connecter
// le Redux Devtools avec la prise en charge des autres enhancers(ex: Middleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // composeEnhancers(applyMiddleware(logger, auth, websocket)),
  composeEnhancers(applyMiddleware(
    logger,
    userAxios,
    submitSignupFormular,
    submitSigninFormular,
    deleteUser,
  )),
);

export default store;
