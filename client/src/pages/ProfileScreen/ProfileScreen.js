import { React, Fragment, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileForm from '../../components/profile/editprofile/EditProfileForm';
import { getUser } from '../../redux/actions/authActions';

import './ProfileScreen.scss';
import OrdersList from '../../components/profile/orders/OrdersList';

const ProfileScreen = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const [ display, setDisplay ] = useState('edit');

	useEffect(
		() => {
			dispatch(getUser());
		},
		[ dispatch ]
	);

	const handleChoice = (choice) => {
		return setDisplay(choice);
	};

	return (
		<Fragment>
			{auth.Auth ? (
				<div className="profilecontainer">
					<div className="profile__leftcontainer">
						<ul>
							<li>
								<button onClick={() => handleChoice('edit')}>EditProfile</button>
							</li>
							<li>
								<button onClick={() => handleChoice('orders')}>Orders</button>
							</li>
						</ul>
					</div>
					<div className="profile__rightcontainer">
						{display === 'edit' && <EditProfileForm />}
						{display === 'orders' && <OrdersList />}
					</div>
				</div>
			) : (
				<Navigate to="/auth" />
			)}
		</Fragment>
	);
};

export default ProfileScreen;
