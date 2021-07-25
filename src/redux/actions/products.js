import { 
  START_GET_PRODUCTS, 
  START_SEARCH_PRODUCTS,
  SHOW_HOME_SECTION 
} from '../consts';

export const getProducts = payload => ({
  type: START_GET_PRODUCTS,
  payload
});

export const searchProducts = payload => ({
  type: START_SEARCH_PRODUCTS,
  payload
});

export const showHomeSection = payload => ({
  type: SHOW_HOME_SECTION,
  payload
});
