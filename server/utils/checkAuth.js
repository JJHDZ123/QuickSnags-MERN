import createError from './createError.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization;

	if (!authHeader.startsWith('Bearer')) {
		return next(createError({ status: 401, message: 'Unauthorized' }));
	}

	const token = authHeader.split(' ')[1];

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return next(createError({ status: 403, message: 'Forbidden' }));
		}
		req.id = decoded.payload.id;
		req.username = decoded.payload.username;
		next();
	});
};
