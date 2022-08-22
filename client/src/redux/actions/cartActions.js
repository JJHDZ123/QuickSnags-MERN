import * as actionTypes from '../constants/cartConstants.js';
import toast from 'react-hot-toast';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/products/${id}`);

	dispatch({
		type    : actionTypes.ADD_TO_CART,
		payload : {
			product      : data._id,
			name         : data.name,
			imageUrl     : data.imageUrl,
			price        : data.price,
			countInStock : data.countInStock,
			qty
		}
	});

	sessionStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
	toast.success('Cart Updated!');
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type    : actionTypes.REMOVE_FROM_CART,
		payload : id
	});

	sessionStorage.setItem('cart', JSON.stringify(getState.cart.cartItems));
};
