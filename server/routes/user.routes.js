import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyTokens.js';


const router = express.Router();

router.get('/', test)
router.post('/update-user/:id', verifyToken, updateUser)
export default router;

