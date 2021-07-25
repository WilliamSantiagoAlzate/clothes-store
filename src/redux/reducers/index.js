// Import libraries
import { combineReducers } from 'redux';

// Import reducers
import { menu } from './menu';
import { products } from './products';

// Add reducers to root
export const rootReducer = combineReducers({
	menu,
	products
});
