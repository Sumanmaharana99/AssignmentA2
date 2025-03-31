import express from "express";
import userModel from "../models/userModel.js"; 

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try { //Creating and saving new user to database
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default userRouter;
