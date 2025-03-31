import express from 'express';
import cors from 'cors';
import userRouter from "./routes/userRoute.js";
import dotenv from 'dotenv';
import {connectDB} from './config/mongodb.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/user", userRouter); 

app.use("/",(req,res)=>{
    res.send("Welcome to the backend server")
});
app.listen(5000, () => {
    console.log("Server started on port 5000");
    connectDB();
});