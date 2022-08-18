import express from 'express';
import cors from 'cors';
import session from 'express-session';
import { default as connectMongoDBSession } from 'connect-mongodb-session';
import connectDB from './config/Database.js';

const PORT = process.env.PORT || 5000;
const app = express();
const MongoDBStore = connectMongoDBSession(session);

app.use(cors());
app.use(express.json());

const store = new MongoDBStore({
	uri        : process.env.DB_URI,
	collection : 'mySessions'
});

app.use(
	session({
		secret            : 'secret',
		resave            : false,
		saveUninitialized : false,
		store             : store
	})
);

app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port ${PORT}`);
});
