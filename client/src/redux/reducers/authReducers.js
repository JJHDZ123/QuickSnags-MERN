import * as actionTypes from '../constants/userConstants.js';

export const authReducer = (state = { username: '', token: '' }, action) => {
	switch (action.type) {
		case actionTypes.GET_AUTH_REQUEST:
			return {
				loading : true,
				Auth    : ''
			};
		case actionTypes.GET_AUTH_SUCCESS:
			return {
				loading : false,
				Auth    : action.payload
			};
		case actionTypes.GET_AUTH_FAILURE:
			return {
				loading : false,
				error   : action.payload
			};
		default:
			return state;
	}
};

export const userReducer = (state = {}) => {};
