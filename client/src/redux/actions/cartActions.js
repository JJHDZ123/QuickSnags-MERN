import * as actionTypes from '../constants/cartConstants.js';
import toast from 'react-hot-toast';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);

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

	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
	toast.success('Cart Updated!');
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type    : actionTypes.REMOVE_FROM_CART,
		payload : id
	});

	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
	toast.success('Cart Updated!');
};

export const cartReset = () => (dispatch, getState) => {
	dispatch({
		type : actionTypes.CART_RESET
	});
	localStorage.clear('cart');
	toast.success('Snacks on the way!');
};
