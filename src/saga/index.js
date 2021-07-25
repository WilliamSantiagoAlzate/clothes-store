import { all } from 'redux-saga/effects';

// Sagas
import products from './sagas/products';

// Add watchers
export default function * rootSaga() {
  yield all([
    products()
  ]);
}