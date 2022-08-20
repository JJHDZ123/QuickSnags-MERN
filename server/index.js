import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import session from 'express-session';
import { default as connectMongoDBSession } from 'connect-mongodb-session';
import connectDB from './config/Database.js';
import allRoutes from './routes/index.js';
import 'dotenv/config';

const PORT = process.env.PORT || 5000;
const app = express();
const MongoDBStore = connectMongoDBSession(session);
const store = new MongoDBStore({
	uri        : process.env.DB_URI,
	collection : 'mySessions'
});

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use(
	session({
		name              : process.env.SESS_NAME,
		secret            : process.env.SESS_SECRET,
		resave            : false,
		saveUninitialized : false,
		store             : store,
		cookie            : {
			maxAge   : 100 * 60 * 60 * 2,
			sameSite : true
		}
	})
);

app.use('/', allRoutes);

app.use((err, req, res, next) => {
	const status = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';

	return res.status(status).json({ message, stack: err.stack });
});

app.get('/', function(req, res, next) {
	req.session.isAuth = false;
	res.end('session created!');
});

app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port ${PORT}`);
});
