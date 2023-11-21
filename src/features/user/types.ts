import { type Request } from "express";
import { type UserCredentials } from "./repository/types";

export type UserCredentialsRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  UserCredentials
>;
