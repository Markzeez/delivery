import mongoose, { Schema, Document, Model } from "mongoose";

export type UserRole = "SENDER" | "RECEIVER" | "ADMIN" | "RIDER";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["SENDER", "RECEIVER", "ADMIN", "RIDER"],
      default: "SENDER",
    },
  },
  { timestamps: true }
);

// Prevent model re-compilation during hot reload
const User: Model<IUser> =
  mongoose.models.User ?? mongoose.model<IUser>("User", UserSchema);

export default User;
