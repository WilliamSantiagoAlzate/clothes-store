import { CLOSE_MENU, OPEN_MENU } from '../consts';

export const closeMenu = payload => ({
  type: CLOSE_MENU,
  payload
});

export const openMenu = payload => ({
  type: OPEN_MENU,
  payload
});