import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// DB Connection
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected successfully! Host: ${connection.connection.host}`
    );
  } catch (err) {
    console.error(`MongoDB connection failed. ERROR: ${err}`);
    process.exit(1); // Exit the process with an error code
  }
};

export { connectDB };
