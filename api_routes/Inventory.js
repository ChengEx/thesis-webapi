import express from 'express';
import { getInventories,getInventoryById } from '../api/Inventory.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',getInventories);
router.get('/:id',getInventoryById);
// router.post('/', auth, createPost);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth,likePost);

export default router;