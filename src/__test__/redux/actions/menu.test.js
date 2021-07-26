import configureStore from 'redux-mock-store';
import { OPEN_MENU, CLOSE_MENU } from '../../../redux/consts';
import { openMenu, closeMenu } from '../../../redux/actions/menu';

describe('Menu actions', () => {
  const mockStore = configureStore();
  
  test('Should run the open menu action', () => {
    const store = mockStore({ });
    store.dispatch(openMenu());
    
    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(OPEN_MENU);
    expect(actions[0].payload).toEqual(undefined);
  });
  test('Should run the close menu action', () => {
    const store = mockStore({ });
    store.dispatch(closeMenu());

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(CLOSE_MENU);
    expect(actions[0].payload).toEqual(undefined);
  });
})