import { START_GET_PRODUCTS } from '../consts';

export const getProducts = payload => ({
  type: START_GET_PRODUCTS,
  payload
});
