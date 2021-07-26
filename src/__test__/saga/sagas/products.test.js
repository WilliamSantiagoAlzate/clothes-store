import { put, call } from 'redux-saga/effects';
// Actions consts
import {
  SUCCESS_GET_PRODUCTS,
  ERROR_GET_PRODUCTS,
	SUCCESS_SEARCH_PRODUCTS,
	ERROR_SEARCH_PRODUCTS
} from '../../../redux/consts';
// Api call
import { apiCall } from '../../../saga/apiCall';
// Saga
import { 
  getProductsRequest, 
  searchProductsRequest 
} from '../../../saga/sagas/products';

const baseURL = `https://api.mercadolibre.com/sites/MCO/search?`;

describe('Get products request', () => {
  it('Success response', () => {
    const getProducts = getProductsRequest();
    expect(getProducts.next().value).toEqual(call(apiCall, `${baseURL}category=MCO1430&limit=30`, 'GET'));
    expect(getProducts.next().value).toEqual(put({ type: SUCCESS_GET_PRODUCTS }))
  })

  it('Error response', () => {
    const getProducts = getProductsRequest();
    getProducts.next();
    const error = 'Error';
    expect(getProducts.throw(error).value).toEqual(put({ type: ERROR_GET_PRODUCTS, error }));
  })
})

describe('Search products request', () => {
  const payload = { keyWord: 'camisa' };

  it('Success response', () => {
    const searchProducts = searchProductsRequest({ payload });
    expect(searchProducts.next().value).toEqual(call(apiCall, `${baseURL}q=camisa`, 'GET'));
    expect(searchProducts.next().value).toEqual(put({ type: SUCCESS_SEARCH_PRODUCTS }))
  })

  it('Error response', () => {
    const searchProducts = searchProductsRequest({ payload });
    searchProducts.next();
    const error = 'Error';
    expect(searchProducts.throw(error).value).toEqual(put({ type: ERROR_SEARCH_PRODUCTS, error }));
  })
})
