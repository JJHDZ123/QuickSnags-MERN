import React from 'react';
import './Forms.scss';

const Register = (props) => {
	return (
		<div className="app__flex container">
			<div className="formcontainer">
				<input type="username" placeholder="Username" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<input type="password" placeholder="Confirm Password" />
			</div>
			<button className="submitbtn" type="submit">
				Sign up
			</button>
			<p>
				Already a member?{' '}
				<button className="boldlink" onClick={() => props.switch('signin')}>
					Log in
				</button>
			</p>
		</div>
	);
};

export default Register;
