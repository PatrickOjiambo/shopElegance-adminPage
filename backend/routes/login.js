import express from 'express';
import { login } from '../controller/loginC.js';
const router = express.Router();

router.post('/', login);
export default router;