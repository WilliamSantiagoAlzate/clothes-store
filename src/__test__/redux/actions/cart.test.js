import configureStore from 'redux-mock-store';
import { ADD_ITEM, REMOVE_ITEM } from '../../../redux/consts';
import { addItem, removeItem } from '../../../redux/actions/cart';

describe('Cart actions', () => {
  const mockStore = configureStore();
  
  test('Should run the add item action', () => {
    const store = mockStore({ });
    const product = { id: 'id', price: 300 };
    store.dispatch(addItem(product));
    
    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(ADD_ITEM);
    expect(actions[0].payload).toEqual(product);
  });
  test('Should run the remove item action', () => {
    const store = mockStore({ });
    const productId = 'id';
    store.dispatch(removeItem(productId));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(REMOVE_ITEM);
    expect(actions[0].payload).toEqual(productId);
  });
})