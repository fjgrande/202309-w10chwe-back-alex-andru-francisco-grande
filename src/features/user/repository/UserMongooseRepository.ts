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

    const userPassword = await User.findOne({ password });
    if (!userPassword) {
      throw new Error("Incorrect password");
    }

    return user;
  };
}

export default UserMongooRepository;
