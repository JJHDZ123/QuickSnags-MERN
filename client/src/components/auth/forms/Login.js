import React from 'react';
import './Forms.scss';

const Login = (props) => {
	return (
		<div className="app__flex container">
			<div className="formcontainer">
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
			</div>
			<button className="submitbtn" type="submit">
				Sign in
			</button>
			<p>
				Don't have an account?{' '}
				<button className="boldlink" onClick={() => props.switch('signup')}>
					Sign up
				</button>
			</p>
		</div>
	);
};

export default Login;
