import { type Response } from "express";
import jwt from "jsonwebtoken";
import { type JwtPayload } from "jsonwebtoken";
import { type UserCredentialsRequest } from "../types";
import type UserMongooRepository from "../repository/UserMongooseRepository.js";

class UserController {
  constructor(private readonly userRepository: UserMongooRepository) {}
  loginUser = async (req: UserCredentialsRequest, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await this.userRepository.getUser(username, password);
      const userData: JwtPayload = { sub: user._id, name: user.name };
      const token = jwt.sign(userData, process.env.JWT_SECRET_KEY!);

      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ error: "Wrong credentials" });
    }
  };
}

export default UserController;
