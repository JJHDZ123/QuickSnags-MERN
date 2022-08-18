import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URI);
		console.log('mongoDB is connected');
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

export default connectDB;
