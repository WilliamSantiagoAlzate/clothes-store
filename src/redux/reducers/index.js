// Import libraries
import { combineReducers } from 'redux';

// Import reducers
import { menu } from './menu';

// Add reducers to root
export const rootReducer = combineReducers({
	menu
});
