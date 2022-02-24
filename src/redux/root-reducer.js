import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Local storage
import storage from 'redux-persist/lib/storage';
// If we want to use session storage, import sessionStorage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root', // at what point inside the reducer we want to persist
  storage,
  // Indicate the parts that we want to persist.
  // We don't want the user part because it is stored on firebase.
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
