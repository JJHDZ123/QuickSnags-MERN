import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';
import User from '../models/User.js';
import 'dotenv/config';

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
		const user = await User.findOne({ username: req.body.username }).exec();
		if (!user) {
			return next(createError({ status: 404, message: 'No user found' }));
		}
		const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
		if (!isPasswordCorrect) {
			return next(createError({ status: 404, message: 'Password incorrect' }));
		}

		const payload = {
			id       : user._id,
			username : user.username
		};

		const username = user.username;
		const id = user._id;

		const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn : '1m'
		});

		const refreshToken = jwt.sign({ username: user.username }, process.env.JWT_REFRESH_SECRET, {
			expiresIn : '10m'
		});

		return res
			.cookie('JWT', refreshToken, {
				httpOnly : true,
				maxAge   : 7 * 24 * 60 * 60 * 1000
			})
			.json({ accessToken, username, id });
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

export const logout = (req, res) => {
	res.clearCookie('JWT', {
		httpOnly : true
	});
	return res.status(200).json({ message: 'Logout was successful' });
};

export const refresh = (req, res) => {
	const cookies = req.cookies;
	if (!cookies.JWT || cookies.JWT === '') {
		return res.status(401).json({ message: 'Unauthorized 1' });
	}

	const refreshToken = cookies.JWT;

	return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async (err, decoded) => {
		if (err) {
			return res.status(403).json({ message: 'Forbidden' });
		}

		const user = await User.findOne({ username: decoded.username }).exec();

		const username = user.username;
		const id = user._id;

		if (!user) {
			return res.status(401).json({ message: 'Unauthorized 2' });
		}

		const accessToken = jwt.sign(
			{
				payload : {
					id       : user._id,
					username : user.username
				}
			},
			process.env.JWT_SECRET,
			{ expiresIn: '1m' }
		);

		res.json({ accessToken, username, id });
	});
};
