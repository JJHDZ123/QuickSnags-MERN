import createError from './createError.js';

export default (req, res, next) => {
	const token = req.session.isAuth;

	switch (token) {
		case !token:
			return next(createError({ status: 401, message: 'Unauthorized' }));
		case token === false:
			return next(createError({ status: 401, message: 'Invalid Token' }));
		case token === true:
			return next();
	}
};
