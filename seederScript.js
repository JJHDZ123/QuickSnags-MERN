import 'dotenv/config';

import { products } from './data/Products.js';
import connectDB from './config/Database.js';
import Product from './models/Product.js';

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany({});

		await Product.insertMany(products);

		console.log('Data Import Success');

		process.exit();
	} catch (error) {
		console.error('Error with data import', error);
		process.exit(1);
	}
};

importData();
