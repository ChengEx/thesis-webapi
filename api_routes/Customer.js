import express from 'express';
import { signin,signup } from '../api/Customer.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup);

// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth,likePost);

export default router;