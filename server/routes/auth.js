import express from 'express';
import { register, login, logout, refresh } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/is_Logged_In', refresh);

export default router;
