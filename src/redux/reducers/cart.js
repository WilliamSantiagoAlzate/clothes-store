import { ADD_ITEM, REMOVE_ITEM } from '../consts';

export const initialState = {
  cartProducts: [],
	productsIds: []
}

export const cart = (state = initialState, action) => {
	const { cartProducts, productsIds } = state;
  const newCartProducts = [...cartProducts];
  const newProductsIds = [...productsIds];
	
	switch (action.type) {
		case ADD_ITEM:
			const { product } = action.payload;
      newCartProducts.push(product);
      newProductsIds.push(product.id);
			return {
				...state,
				cartProducts: newCartProducts,
				productsIds: newProductsIds
			}
		case REMOVE_ITEM:
			const { productId } = action.payload;
			return {
				...state,
				cartProducts: newCartProducts.filter(product => product.id !== productId),
				productsIds: newProductsIds.filter(id => id !== productId)
			}
		default:
			return { ...state };
	}
}
