import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Forms.scss';

const Register = (props) => {
	const registerUser = async (e) => {
		e.preventDefault();
		const user = {
			username : e.target.username.value,
			email    : e.target.email.value,
			password : e.target.password.value
		};
		console.log(user);
		try {
			await axios.post('/api/auth/register', user);
			e.target.reset();
			toast.success('Registration completed!');
		} catch (err) {
			console.log(err);
			toast.error('Registration failed!');
		}
	};

	return (
		<div className="app__flex container">
			<form className="formcontainer" onSubmit={registerUser}>
				<input name="username" type="username" placeholder="Username" required />
				<input name="email" type="email" placeholder="Email" required />
				<input name="password" type="password" placeholder="Password" required />
				<button className="submitbtn" type="submit">
					Sign up
				</button>
			</form>
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
