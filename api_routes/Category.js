import express from 'express';
import { getCategories } from '../api/Category.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCategories);


export default router;