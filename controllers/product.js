import Product from '../models/Product.js';

export const getProducts = async (req, res, next) => {
	try {
		const products = await Product.find({});
		return res.status(200).json(products);
	} catch (err) {
		return next(err);
	}
};

export const getProductById = async (req, res, next) => {
	try {
		const product = await Product.findById(req.params.id);
		return res.status(200).json(product);
	} catch (err) {
		return next(err);
	}
};
