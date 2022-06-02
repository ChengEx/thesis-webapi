import express from 'express';
import { getCategories, getCategoriseByIdentity } from '../api/Category.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCategories);
router.get('/:identity', getCategoriseByIdentity);

export default router;