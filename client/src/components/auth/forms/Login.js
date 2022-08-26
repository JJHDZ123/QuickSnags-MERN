import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyAuth } from '../../../redux/actions/authActions';
import './Forms.scss';

const Login = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginUser = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		try {
			await axios.post('/auth/login', {
				email,
				password
			});
			navigate('/');
			dispatch(verifyAuth());
			toast.success('Login successful!');
		} catch (err) {
			console.log(err);
			toast.error('Login failed!');
		}
	};

	return (
		<div className="app__flex container">
			<form className="formcontainer" onSubmit={loginUser}>
				<input name="email" type="email" placeholder="Email" required />
				<input name="password" type="password" placeholder="Password" required />
				<button className="submitbtn" type="submit">
					Sign in
				</button>
			</form>
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
