import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    googleID: { type: String },
    email: { type: String },
    name: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
