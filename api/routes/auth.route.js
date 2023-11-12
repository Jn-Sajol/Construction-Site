import express from 'express'
import { signIn } from '../controller/auth.controller.js';
const router = express.Router();

router.post('/auth',signIn)

export default router;