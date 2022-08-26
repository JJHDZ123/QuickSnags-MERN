import * as actionTypes from '../constants/userConstants.js';
import axios from 'axios';

export const verifyAuth = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_AUTH_REQUEST });

		const { data } = await axios.get('/auth/is_Logged_In');

		dispatch({
			type    : actionTypes.GET_AUTH_SUCCESS,
			payload : data
		});
	} catch (error) {
		dispatch({
			type    : actionTypes.GET_AUTH_FAILURE,
			payload : false
		});
	}
};

export const getUser = () => {};

export const updateUser = () => {};

export const getUserOrders = () => {};
