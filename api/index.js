import express from "express";
const app = express();
const port = 8000;

import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO).then(()=>{
try {
    console.log('db connet')
} catch (error) {
    console.log(error)
}
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  res.send("hello from helllo site");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
