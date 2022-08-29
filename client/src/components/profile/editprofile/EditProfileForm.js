import toast from 'react-hot-toast';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUser } from '../../../redux/actions/authActions';

import './EditProfileForm.scss';

const EditProfileForm = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const [ updatedUser, setUpdatedUser ] = useState({
		username : '',
		email    : ''
	});

	const updateUserInfo = (e) => {
		setUpdatedUser({
			...updatedUser,
			[e.target.name]: e.target.value
		});
	};

	const updateProfile = async (e) => {
		dispatch(updateUser(updatedUser));
		toast.success('Profile updated!');
		dispatch(logout());
	};

	return (
		<Fragment>
			<div className="Editcontainer">
				<h1>Edit Profile</h1>
				<form className="formcontainer" onSubmit={updateProfile}>
					<label htmlFor="username">
						<input
							type="username"
							name="username"
							placeholder="Username"
							required
							value={updatedUser.username}
							onChange={updateUserInfo}
						/>
					</label>
					<label htmlFor="email">
						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							value={updatedUser.email}
							onChange={updateUserInfo}
						/>
					</label>
					<button type="submit">Save</button>
				</form>
			</div>
		</Fragment>
	);
};

export default EditProfileForm;
