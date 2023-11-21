import { Schema, model } from "mongoose";
import { type UserStructure } from "../repository/types";

const UserSchema = new Schema<UserStructure>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 4,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", UserSchema, "users");
export default User;
