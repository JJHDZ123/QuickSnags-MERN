import express from 'express';
import authRoutes from './auth.js';
import productsRoutes from './products.js';
import userRoutes from './users.js';
import checkAuth from '../utils/checkAuth.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/products', checkAuth, productsRoutes);
router.use('/users', checkAuth, userRoutes);

export default router;
