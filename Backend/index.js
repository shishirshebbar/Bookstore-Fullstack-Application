import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./routes/bookroute.js"; // Ensure this path is correct
import userRoute from "./routes/userroute.js";
const app = express();
app.use(cors());// Cross-Origin Resource Sharing
app.use(express.json())//middleware to parse json data
dotenv.config();
const port = process.env.PORT || 4000; 
const URL = process.env.MONGODB;

// MongoDB connection
try {
  mongoose.connect(URL, {
    
  });
  console.log("Connected to MONGODB");
} catch (error) {
  console.log("Error-", error);
}

app.use('/book', bookRoute);
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
