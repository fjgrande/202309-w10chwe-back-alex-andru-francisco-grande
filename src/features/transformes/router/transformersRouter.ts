import { Router } from "express";
import TransformersController from "../controller/transformersController.js";
import TransformersMongooseRepository from "../repository/TransformersMongooseRepository.js";

const transformersRouter = Router();

const transformersRepository = new TransformersMongooseRepository();

const transformersController = new TransformersController(
  transformersRepository,
);

transformersRouter.get("/", transformersController.getTransformers);

export default transformersRouter;
