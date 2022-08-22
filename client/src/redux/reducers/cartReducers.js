import * as actionTypes from '../constants/cartConstants.js';

const cartFromSessionStorage = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];

export const cartReducer = (
	state = cartFromSessionStorage ? { cartItems: cartFromSessionStorage } : { cartItems: [] },
	action
) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const item = action.payload;

			const existItem = state.cartItems.find((x) => x.name === item.name);

			if (existItem) {
				return {
					...state,
					cartItems : state.cartItems.map((x) => (x.product === existItem.product ? item : x))
				};
			} else {
				return {
					...state,
					cartItems : [ ...state.cartItems, item ]
				};
			}

		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems : state.cartItems.filter((x) => x.product !== action.payload)
			};

		default:
			return state;
	}
};
