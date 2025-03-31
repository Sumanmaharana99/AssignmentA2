import express from "express";
import userModel from "../models/userModel.js"; // Import the User model

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    
    // Create a new user with data from the request body
    const newUser = new userModel(req.body);

    // Save the user to MongoDB
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    // Handle errors (e.g., duplicate email, missing fields)
    res.status(500).json({ error: err.message });
  }
});

export default userRouter;
