import { CLOSE_MENU, OPEN_MENU } from '../consts';

const initialState = {
  menuClassName: 'menu menu--collapsed'
}

export const menu = (state = initialState, action) => {
	switch (action.type) {
		case CLOSE_MENU:
			return {
				...state,
				menuClassName: 'menu menu--collapsed'
			}
		case OPEN_MENU:
			return {
				...state,
				menuClassName: 'menu'
			}
		default:
			return { ...state };
	}
}
