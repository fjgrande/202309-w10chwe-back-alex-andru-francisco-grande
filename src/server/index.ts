import morgan from "morgan";
import app from "./app.js";
import express from "express";
import { notFound } from "./middlewares/errors/errorMiddleware.js";
import pingRouter from "../features/ping/router/pingRouter.js";

app.use(morgan("dev"));

app.use(express.json());

app.use("/", pingRouter);
app.use(notFound);
