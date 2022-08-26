import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyAuth } from '../../redux/actions/userActions';

function PrivateRoutes() {
	const dispatch = useDispatch();

	dispatch(verifyAuth());

	const auth = useSelector((state) => state.auth);

	if (auth === undefined) return <Navigate to="/auth" />;

	return auth === true ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoutes;
