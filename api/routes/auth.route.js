import express from 'express'
import { signIn, signUp } from '../controller/auth.controller.js';
const router = express.Router();

router.post('/auth/signup',signUp)
router.post('/auth/signin',signIn)

export default router;