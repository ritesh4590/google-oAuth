import mongoose from "mongoose";

const ConnectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Database connected......");
  } catch (error) {
    console.log("MongoDB Connection error:", error.message);
  }
};

export default ConnectDB;
