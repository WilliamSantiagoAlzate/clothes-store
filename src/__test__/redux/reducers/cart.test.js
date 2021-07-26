import { ADD_ITEM, REMOVE_ITEM } from '../../../redux/consts';
import { cart, initialState } from '../../../redux/reducers/cart';

//Do test of app reducer
describe('Cart reducers', () => {
  test('Should returns the initial state', () => {
    expect(cart(undefined, {})).toEqual(initialState);
  });

  test('Add item to cart', () => {
    const product = { id: 'id', price: 300 };
    expect(
      cart(initialState, { type: ADD_ITEM, payload: { product }})
    ).toEqual({ 
      ...initialState,
      cartProducts: [product],
      productsIds: ['id'] 
    });
  });

  test('Remove item to cart', () => {
    const initialStateMock = {
      cartProducts: [{ id: 'id', price: 300 }],
      productsIds: ['id'] 
    }
    const productId = 'id';
    expect(
      cart(initialStateMock, { type: REMOVE_ITEM, payload: { productId }})
    ).toEqual({
      ...initialState,
      cartProducts: [],
      productsIds: [] 
    });
  });
});