import React, { Fragment, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditProfileForm from '../../components/profile/editprofile/EditProfileForm';

import './ProfileScreen.scss';

const ProfileScreen = () => {
	const auth = useSelector((state) => state.auth);
	const [ display, setDisplay ] = useState('edit');

	const handleChoice = () => {
		return setDisplay('edit');
	};

	return (
		<Fragment>
			{auth ? (
				<div className="profilecontainer">
					<div className="profile__leftcontainer">
						<ul>
							<li>
								<button>EditProfile</button>
							</li>
							<li>
								<button>Orders</button>
							</li>
						</ul>
					</div>
					<div className="profile__rightcontainer">{display === 'edit' && <EditProfileForm />}</div>
				</div>
			) : (
				<Navigate to="/auth" />
			)}
		</Fragment>
	);
};

export default ProfileScreen;
