import bcrypt from 'bcryptjs';
import createError from '../utils/createError.js';
import User from '../models/User.js';

export const register = async (req, res, next) => {
	if (!req.body.username || !req.body.email || !req.body.password) {
		return next(createError({ status: 400, message: 'Username, Email, and Password are all required' }));
	}
	const user = await User.findOne({ email: req.body.email }).select('username email password');
	if (user) {
		return next(createError({ status: 404, message: 'User already exists' }));
	}

	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			username : req.body.username,
			email    : req.body.email,
			password : hashedPass
		});

		await newUser.save();
		return res.status(201).json('New User created');
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

export const login = async (req, res, next) => {
	if (!req.body.email || !req.body.password) {
		return next(createError({ status: 400, message: 'Email, and Password are required' }));
	}

	try {
		const user = await User.findOne({ email: req.body.email }).select('username email password');
		if (!user) {
			return next(createError({ status: 404, message: 'No user found' }));
		}
		const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
		if (!isPasswordCorrect) {
			return next(createError({ status: 404, message: 'Password incorrect' }));
		}

		req.session.isAuth = true;
		req.session.userID = user.id;
		return res.json('logged in');
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

export const logout = (req, res, next) => {
	req.session.destroy((err) => {
		if (err) {
			return next(err);
		}
		res.clearCookie('ECOMM');

		return res.status(200).json({ message: 'Logout was successful' });
	});
};

export const isLoggedIn = (req, res) => {
	const token = req.session.isAuth;

	switch (token) {
		case !token:
			return res.json(false);
		case token === false:
			return res.json(false);
		case token === true:
			return res.json(true);
	}
};
