import {combineReducers} from 'redux';

import books from './books';
import cart from './cart';
import sorting from './sorting';

export default combineReducers({
  books,
  cart,
  sorting
});
