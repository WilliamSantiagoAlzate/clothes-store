import { 
  START_GET_PRODUCTS, 
  SUCCESS_GET_PRODUCTS, 
  ERROR_GET_PRODUCTS 
} from '../consts';

const initialState = {
  products: [],
  loadingProducts: false
}

export const products = (state = initialState, action) => {
	switch (action.type) {
		case START_GET_PRODUCTS:
			return {
				...state,
				products: [],
        loadingProducts: true
			}
		case SUCCESS_GET_PRODUCTS:
			return {
        ...state,
				loadingProducts: false,
				products: action.result.results
			}
      case ERROR_GET_PRODUCTS:
      console.log(action.error);
			return {
				...state,
				loadingProducts: false
			}
		default:
			return { ...state };
	}
}
