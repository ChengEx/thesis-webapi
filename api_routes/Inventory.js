import express from 'express';
import { getInventories, getInventoryById, getInventoriesByCategories ,addInventories } from '../api/Inventory.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',getInventories);
router.get('/:id',getInventoryById);
router.get('/:category/:type', getInventoriesByCategories);
router.post('/',addInventories);

//
export default router;