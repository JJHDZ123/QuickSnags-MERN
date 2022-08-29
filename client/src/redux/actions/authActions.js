import * as actionTypes from '../constants/userConstants.js';
import axios from 'axios';
import toast from 'react-hot-toast';

export const verifyAuth = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_AUTH_REQUEST });

		const { data } = await axios.get('/auth/refresh');

		dispatch({
			type    : actionTypes.GET_AUTH_SUCCESS,
			payload : data
		});
	} catch (error) {
		dispatch({
			type    : actionTypes.GET_AUTH_FAILURE,
			payload : error.message
		});
	}
};

export const getUser = () => async (dispatch, getState) => {
	try {
		dispatch({ type: actionTypes.GET_USER_INFO_REQUEST });

		const header = 'Bearer ' + getState().auth.Auth.accessToken;

		const { data } = await axios.get('/api/users/me', {
			headers : {
				Authorization : header
			}
		});
		dispatch({
			type    : actionTypes.GET_USER_INFO_SUCCESS,
			payload : data
		});
	} catch (error) {
		dispatch({
			type    : actionTypes.GET_USER_INFO_FAILURE,
			payload : error.message
		});
	}
};

// export const addOrder = () => (getState) => {
// 	localStorage.setItem('orders', JSON.stringify(getState().cart.cartItems));
// 	toast.success('added to orders!');
// };

export const updateUser = (updatedUser) => async (dispatch, getState) => {
	try {
		dispatch({ type: actionTypes.UPDATE_USER_INFO_REQUEST });

		const header = 'Bearer ' + getState().auth.Auth.accessToken;

		const { data } = await axios.put('/api/users/me', updatedUser, {
			headers : {
				Authorization : header
			}
		});
		dispatch({
			type    : actionTypes.UPDATE_USER_INFO_SUCCESS,
			payload : data
		});
	} catch (error) {
		dispatch({
			type    : actionTypes.UPDATE_USER_INFO_FAILURE,
			payload : error.message
		});
	}
};

export const logout = () => () => {
	axios.get('/api/auth/logout', {
		withCredentials : true
	});
	toast.success('you have been logged out!');
};
