import express from 'express';
import { createProductController } from '../controller/Products/createProduct.js';
import { upload, handleImageUpload } from '../middleware/imageUpload.js';

const router = express.Router();
router.post('/', upload.single('image'), createProductController);
export default router;