import { 
  START_GET_PRODUCTS, 
  SUCCESS_GET_PRODUCTS, 
  ERROR_GET_PRODUCTS,
	START_SEARCH_PRODUCTS,
	SUCCESS_SEARCH_PRODUCTS,
	ERROR_SEARCH_PRODUCTS,
	SHOW_HOME_SECTION 
} from '../consts';

export const initialState = {
  products: [],
  loadingProducts: false,
  searchedProducts: [],
  loadingSearchedProducts: false,
	showSearchedProcutsSection: false
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
			return {
				...state,
				loadingProducts: false
			}
		case START_SEARCH_PRODUCTS:
			return {
				...state,
				searchedProducts: [],
        loadingSearchedProducts: true,
				showSearchedProcutsSection: true
			}
		case SUCCESS_SEARCH_PRODUCTS:
			return {
        ...state,
				loadingSearchedProducts: false,
				searchedProducts: action.result.results
			}
    case ERROR_SEARCH_PRODUCTS:
			return {
				...state,
				loadingSearchedProducts: false,
				showSearchedProcutsSection: false
			}
    case SHOW_HOME_SECTION:
			return {
				...state,
				showSearchedProcutsSection: false
			}
		default:
			return { ...state };
	}
}
