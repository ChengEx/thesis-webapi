import express from 'express';
import { getCart, addCart, addCartQuantity, minusCartQuantity, deleteCart } from '../api/Cart.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', getCart);
router.post('/', auth, addCart);
router.post('/addCartQuantity/:id', auth, addCartQuantity);
router.post('/minusCartQuantity/:id', auth, minusCartQuantity);
router.post('/deleteCart/:id', auth, deleteCart);


export default router;