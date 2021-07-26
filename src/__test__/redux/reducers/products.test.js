import { 
  START_GET_PRODUCTS,
  SUCCESS_GET_PRODUCTS,
  ERROR_GET_PRODUCTS,
  START_SEARCH_PRODUCTS,
  SUCCESS_SEARCH_PRODUCTS,
  ERROR_SEARCH_PRODUCTS,
  SHOW_HOME_SECTION 
} from '../../../redux/consts';
import { products, initialState } from '../../../redux/reducers/products';

//Do test of app reducer
describe('Products reducers', () => {
  test('Should returns the initial state', () => {
    expect(products(undefined, {})).toEqual(initialState);
  });

  test('Set loading produts', () => {
    expect(
      products(initialState, { type: START_GET_PRODUCTS })
    ).toEqual({ 
      ...initialState,
      loadingProducts: true 
    });
  });

  test('Set products list and remove loading products', () => {
    const product = 'Product one';
    const productsData = { results: [product] };
    expect(
      products(initialState, { type: SUCCESS_GET_PRODUCTS, result: productsData})
    ).toEqual({
      ...initialState,
      loadingProducts: false,
      products: [product]
    });
  });

  test('Remove loading products', () => {
    expect(
      products(initialState, { type: ERROR_GET_PRODUCTS })
    ).toEqual({
      ...initialState,
      loadingProducts: false
    });
  });

  test('Set loading searched produts and doesnt show home section', () => {
    expect(
      products(initialState, { type: START_SEARCH_PRODUCTS })
    ).toEqual({ 
      ...initialState,
      loadingSearchedProducts: true,
      showSearchedProcutsSection: true 
    });
  });

  test('Set searched products list and remove loading searched products', () => {
    const product = 'Product one';
    const productsData = { results: [product] };
    expect(
      products(initialState, { type: SUCCESS_SEARCH_PRODUCTS, result: productsData})
    ).toEqual({
      ...initialState,
      loadingSearchedProducts: false,
      searchedProducts: [product]
    });
  });

  test('Remove loading searched products and show home section', () => {
    expect(
      products(initialState, { type: ERROR_SEARCH_PRODUCTS })
    ).toEqual({
      ...initialState,
      loadingSearchedProducts: false,
      showSearchedProcutsSection: false
    });
  });

  test('Show home section', () => {
    expect(
      products(initialState, { type: SHOW_HOME_SECTION })
    ).toEqual({
      ...initialState,
      showSearchedProcutsSection: false
    });
  });
});