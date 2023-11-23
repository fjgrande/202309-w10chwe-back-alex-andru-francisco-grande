import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { type UserStructure } from "./types";

class UserMongooRepository {
  getUser = async (
    username: string,
    password: string,
  ): Promise<UserStructure> => {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Username not found");
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Incorrect password");
    }

    return user;
  };
}

export default UserMongooRepository;
