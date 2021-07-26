import configureStore from 'redux-mock-store';
import { START_GET_PRODUCTS, START_SEARCH_PRODUCTS, SHOW_HOME_SECTION } from '../../../redux/consts';
import { getProducts, searchProducts, showHomeSection } from '../../../redux/actions/products';

describe('Products actions', () => {
  const mockStore = configureStore();
  
  test('Should run the get products action', () => {
    const store = mockStore({ });
    store.dispatch(getProducts());
    
    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(START_GET_PRODUCTS);
    expect(actions[0].payload).toEqual(undefined);
  });
  test('Should run the search products action', () => {
    const store = mockStore({ });
    store.dispatch(searchProducts());

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(START_SEARCH_PRODUCTS);
    expect(actions[0].payload).toEqual(undefined);
  });
  test('Should run the show home section action', () => {
    const store = mockStore({ });
    store.dispatch(showHomeSection());

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(SHOW_HOME_SECTION);
    expect(actions[0].payload).toEqual(undefined);
  });
})