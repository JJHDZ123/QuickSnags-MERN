import React, { Fragment } from 'react';

import './EditProfileForm.scss';

const EditProfileForm = () => {
	return (
		<Fragment>
			<div className="Editcontainer">
				<h1>Edit Profile</h1>
				<form className="formcontainer">
					<input type="name" name="name" placeholder="Username" required />
					<input type="password" name="password" placeholder="Password" required />
					<button type="submit">Save</button>
				</form>
			</div>
		</Fragment>
	);
};

export default EditProfileForm;
