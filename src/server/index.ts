import morgan from "morgan";
import app from "./app.js";
import express from "express";
import cors from "cors";
import { notFound } from "./middlewares/errors/errorMiddleware.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import transformersRouter from "../features/transformes/router/transformersRouter.js";

app.use(morgan("dev"));
app.use(
  cors({ origin: "https://two02309-w10chwe-back-alex-andru.onrender.com/" }),
);

app.use("/transformers", transformersRouter);
app.use("/", pingRouter);
app.use(notFound);

app.use(express.json());
