import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import connectDB from './config/Database.js';
import allRoutes from './routes/index.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', allRoutes);

//USED FOR THE DEPLOYMENT INTO HEROKU FOR CLIENT SIDE
//* ****************************************************************** */
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});
//* ******************************************************************** */

app.use((err, req, res, next) => {
	const status = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';

	return res.status(status).json({ message, stack: err.stack });
});

app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port ${PORT}`);
});
