import express from "express";
import { deleteUser, getUserListings, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/varifyUser.js";
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send({hello:"hi"});
});

router.patch('/update/:id',verifyToken, updateUser)
router.delete('/delete/:id',verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)

export default router;