import * as actionTypes from '../constants/productConstant.js';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

		const { data } = await axios.get('/products');

		dispatch({
			type    : actionTypes.GET_PRODUCTS_SUCCESS,
			payload : data
		});
	} catch (error) {
		dispatch({
			type    : actionTypes.GET_PRODUCTS_FAIL,
			payload : error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`/products/${id}`);

		dispatch({
			type    : actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
			payload : data
		});
	} catch (error) {
		dispatch({
			type    : actionTypes.GET_PRODUCT_DETAILS_FAIL,
			payload : error.response && error.repsonse.data.message ? error.repsonse.data.message : error.message
		});
	}
};

export const removeProductDetails = () => (dispatch) => {
	dispatch({
		type : actionTypes.GET_PRODUCT_DETAILS_RESET
	});
};