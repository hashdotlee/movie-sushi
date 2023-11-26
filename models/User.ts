import mongoose from "mongoose";

export interface User extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 1024,
    select: false,
  },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
