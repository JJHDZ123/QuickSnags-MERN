import User from '../models/User.js';

export const getUserInfo = async (req, res, next) => {
	try {
		const data = await User.findById(req.id).exec();
		return res.status(200).json(data);
	} catch (err) {
		return next(err);
	}
};

export const updateUser = async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.id,
			{
				username : req.body.username,
				email    : req.body.email
			},
			{
				new : true
			}
		).select('username email');
		return res.status(200).json(updatedUser);
	} catch (err) {
		return next(err);
	}
};
