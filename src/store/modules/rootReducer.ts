import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cart from './cart/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['cart'],
};

const cartPersistConfig = {
  key: 'cart',
  storage,
  blacklist: ['failureInStock'],
};

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cart),
});

export default persistReducer(rootPersistConfig, rootReducer);
