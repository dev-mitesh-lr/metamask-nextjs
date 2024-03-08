// import mongoose from "@/lib/mongodb";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rewardPoints: { type: Number },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
