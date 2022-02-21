import { createStore, applyMiddleware } from 'redux';
// Logger Middleware
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Setup our middlewares
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
