import { React, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyAuth } from '../../redux/actions/authActions';

function PersistLogin() {
	const [ checked, setChecked ] = useState(false);
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (checked === false) {
				dispatch(verifyAuth());
				setChecked(true);
			}
		},
		[ dispatch, checked ]
	);

	return <Outlet />;
}

export default PersistLogin;
