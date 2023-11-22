import express from "express";
import { listing } from "../controller/listing.controller.js";
import { verifyToken } from "../utils/varifyUser.js";
const router = express.Router();

router.post('/create',verifyToken, listing)

export default router;