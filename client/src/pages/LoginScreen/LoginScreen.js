import React from 'react';
import './LoginScreen.scss';

import AuthBox from '../../components/auth/AuthBox';

const LoginScreen = () => {
	return (
		<div className="app__flex Login">
			<AuthBox />
		</div>
	);
};

export default LoginScreen;
