import { Router } from "express";
import UserMongooRepository from "../repository/UserMongooseRepository.js";
import UserController from "../controller/UsersController.js";

export const userRouter = Router();

const userRepository = new UserMongooRepository();
const userController = new UserController(userRepository);

userRouter.post("/login", userController.loginUser);
