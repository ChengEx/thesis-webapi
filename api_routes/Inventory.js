import express from 'express';
import { getInventory,getInventoryById } from '../api/Inventory.js';

const router = express.Router();

router.get('/',getInventory);
router.get('/:id',getInventoryById);
// router.post('/', auth, createPost);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth,likePost);

export default router;