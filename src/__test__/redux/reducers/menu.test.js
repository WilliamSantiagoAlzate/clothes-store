import { OPEN_MENU, CLOSE_MENU } from '../../../redux/consts';
import { menu, initialState } from '../../../redux/reducers/menu';

//Do test of app reducer
describe('Menu reducers', () => {
  test('Should returns the initial state', () => {
    expect(menu(undefined, {})).toEqual(initialState);
  });

  test('Open menu', () => {
    expect(
      menu(initialState, { type: OPEN_MENU })
    ).toEqual({ 
      ...initialState,
      menuClassName: 'menu' 
    });
  });

  test('Close menu', () => {
    expect(
      menu(initialState, { type: CLOSE_MENU })
    ).toEqual({
      ...initialState,
      menuClassName: 'menu menu--collapsed' 
    });
  });
});