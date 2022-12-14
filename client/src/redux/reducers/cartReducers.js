import * as actionTypes from '../constants/cartConstants.js';

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

export const cartReducer = (
	state = cartFromLocalStorage ? { cartItems: cartFromLocalStorage } : { cartItems: [] },
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

		case actionTypes.CART_RESET:
			return {
				cartItems : []
			};

		default:
			return state;
	}
};
