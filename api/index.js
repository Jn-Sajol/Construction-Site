import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const app = express();
app.use(express.json());
const port = 8000;

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO).then(() => {
  try {
    console.log("db connet");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRouter);
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
