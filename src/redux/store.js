import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cart';
import { userReducer } from './reducers/user';
import { favoritesReducer } from './reducers/favorites';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ));

export default store;