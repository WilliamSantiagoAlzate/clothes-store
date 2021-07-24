// Import libraries
import { createStore } from 'redux';
// Import reducers
import { rootReducer } from '../reducers';

// Create store
export const storeFn = () => {
  return { ...createStore(rootReducer) }
};
