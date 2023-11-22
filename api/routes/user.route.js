import express from "express";
import { updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/varifyUser.js";
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send({hello:"hi"});
});

router.patch('/update/:id',verifyToken, updateUser)

export default router;