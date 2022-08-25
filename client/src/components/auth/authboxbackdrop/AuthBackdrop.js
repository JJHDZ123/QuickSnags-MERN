import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import './AuthBackdrop.scss';

const AuthBackdrop = (props) => {
	const backdropVariants = {
		expanded  : {
			width        : '233%',
			height       : '1050px',
			borderRadius : '20%',
			transform    : 'rotate(60deg)'
		},
		collapsed : {
			width        : '160%',
			height       : '550px',
			borderRadius : '50%',
			transform    : 'rotate(60deg)'
		}
	};

	return (
		<Fragment>
			<motion.div
				className="AuthBoxBackdrop"
				initial={props.initial}
				animate={props.animate}
				transition={props.transition}
				variants={backdropVariants}
			/>
		</Fragment>
	);
};

export default AuthBackdrop;
