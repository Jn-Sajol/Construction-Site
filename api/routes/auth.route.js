import express from 'express'
import { google, signIn, signOut, signUp } from '../controller/auth.controller.js';
const router = express.Router();

router.post('/signup',signUp)
router.post('/signin',signIn)
router.post('/google',google)
router.get('/signout', signOut)

export default router;