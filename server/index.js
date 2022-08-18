import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
	res.send('Hello world!');
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
