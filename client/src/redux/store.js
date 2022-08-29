import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';

import { cartReducer } from './reducers/cartReducers.js';
import { authReducer, userReducer } from './reducers/authReducers.js';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers.js';

const allReducers = combineReducers({
	cart              : cartReducer,
	auth              : authReducer,
	user              : userReducer,
	getProducts       : getProductsReducer,
	getProductDetails : getProductDetailsReducer
});

const middleware = [ thunk ];

export const store = configureStore(
	{ reducer: allReducers },
	composeWithDevToolsDevelopmentOnly(applyMiddleware(...middleware))
);
