import morgan from "morgan";
import app from "./app.js";
import express from "express";
import cors from "cors";
import pingRouter from "../features/ping/router/pingRouter.js";
import transformersRouter from "../features/transformes/router/transformersRouter.js";
import { userRouter } from "../features/user/router/userRouter.js";
import {
  endpointNotFound,
  generalError,
} from "./middlewares/errors/errorMiddlewares.js";

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/transformers", transformersRouter);
app.use("/", pingRouter);
app.use("/", userRouter);
app.use(endpointNotFound);
app.use(generalError);
