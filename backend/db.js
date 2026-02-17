import mongoose from "mongoose";
import { string } from "zod";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSceham = new mongoose.Schema({
  firstName: {
    type: string,
    required: true,
    trim: true,
  },

  lastName: {
    type: string,
    required: true,
    trim: true,
  },

  email: {
    type: string,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: string,
    required: true,
    minlength: 6,
  },
});

module.exports = mongoose.model("User", userSceham);
