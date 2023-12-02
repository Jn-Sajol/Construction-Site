import express from "express";
import { deleteListing, listing } from "../controller/listing.controller.js";
import { verifyToken } from "../utils/varifyUser.js";
const router = express.Router();

router.post('/create',verifyToken, listing)
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;