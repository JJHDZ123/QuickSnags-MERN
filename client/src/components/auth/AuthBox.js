import { React, Fragment, useState } from 'react';
import './AuthBox.scss';

import AuthBackdrop from './authboxbackdrop/AuthBackdrop.js';
import Login from './forms/Login.js';
import Register from './forms/Register.js';

const AuthBox = () => {
	const [ isExpanded, setExpanded ] = useState(false);
	const [ active, setActive ] = useState('signin');

	const expandingTransition = {
		type      : 'spring',
		duration  : 2.3,
		stiffness : 30
	};

	const playExpandingAnimation = () => {
		setExpanded(true);
		setTimeout(() => {
			setExpanded(false);
		}, expandingTransition.duration * 1000 - 1500);
	};

	const switchForm = (formType) => {
		playExpandingAnimation();
		setTimeout(() => {
			setActive(formType);
		}, 400);
	};

	return (
		<Fragment>
			<div className="AuthBoxContainer">
				<div className="app__flex AuthBox__Topcontainer">
					<AuthBackdrop
						initial={false}
						animate={isExpanded ? 'expanded' : 'collapsed'}
						transition={expandingTransition}
					/>
					<div className="AuthBox__Headercontainter">
						{active === 'signin' ? (
							<div>
								<h2>Welcome</h2>
								<h2>Back</h2>
								<h5>Please sign in to continue!</h5>
							</div>
						) : (
							<div>
								<h2>Create </h2>
								<h2>Account</h2>
								<h5>Please sign-up to continue!</h5>
							</div>
						)}
					</div>
				</div>
				<div className="app__flex AuthBox_Bottomcontainer">
					{active === 'signin' && <Login switch={switchForm} />}
					{active === 'signup' && <Register switch={switchForm} />}
				</div>
			</div>
		</Fragment>
	);
};

export default AuthBox;
