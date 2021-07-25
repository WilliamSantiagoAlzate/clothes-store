import { put, call, takeLatest } from 'redux-saga/effects';
// Actions consts
import { 
  START_GET_PRODUCTS,
  SUCCESS_GET_PRODUCTS,
  ERROR_GET_PRODUCTS,
  START_SEARCH_PRODUCTS,
	SUCCESS_SEARCH_PRODUCTS,
	ERROR_SEARCH_PRODUCTS
} from '../../redux/consts';
// Api call
import { apiCall } from '../apiCall';

const baseURL = `https://api.mercadolibre.com/sites/MCO/search?`;

export function * getProductsRequest() {
  try {
    const result = yield call(apiCall, `${baseURL}category=MCO1430&limit=30`, 'GET');
    yield put({ type: SUCCESS_GET_PRODUCTS, result });
  } catch(error) {
    yield put({ type: ERROR_GET_PRODUCTS, error });
  }
}

export function * searchProductsRequest({ payload }) {
  const { keyWord } = payload;

  try {
    const result = yield call(apiCall, `${baseURL}q=${keyWord}`, 'GET');
    yield put({ type: SUCCESS_SEARCH_PRODUCTS, result });
  } catch(error) {
    yield put({ type: ERROR_SEARCH_PRODUCTS, error });
  }
}

// Create watchers
export default function * products() {
  yield takeLatest(START_GET_PRODUCTS, getProductsRequest);
  yield takeLatest(START_SEARCH_PRODUCTS, searchProductsRequest);
}