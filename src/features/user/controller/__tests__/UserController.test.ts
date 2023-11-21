import jwt from "jsonwebtoken";
import { type Request, type Response } from "express";
import { type CustomResponse } from "../../../../types";
import { type UsersMongooseRepositoryStructure } from "../../repository/types";
import { type UserCredentialsRequest } from "../../types";
import UserController from "../UsersController";

describe("Given a loginUser controller", () => {
  const UserCredentialsMock = {
    username: "francisco",
    password: "grande",
  };

  const UserCredentialsIdMock = {
    _id: "545545",
    username: "francisco",
    password: "grande",
  };

  const req: Pick<UserCredentialsRequest, "body"> = {
    body: UserCredentialsMock,
  };

  const res: CustomResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  describe("When it invoked with the valid credentials and a response", () => {
    const token = "token";

    const usersRepository: UsersMongooseRepositoryStructure = {
      getUser: jest.fn().mockResolvedValue(UserCredentialsIdMock),
    };

    const usersController = new UserController(usersRepository);

    jwt.sign = jest.fn().mockReturnValue(token);

    test("Then it should call the response's method status with a 200", async () => {
      const expectedStatusCode = 200;

      await usersController.loginUser(
        req as UserCredentialsRequest,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with token", async () => {
      await usersController.loginUser(
        req as UserCredentialsRequest,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({ token });
    });
  });

  describe("When it invoked with wrong credentials", () => {
    const token = "token";

    const usersRepository: UsersMongooseRepositoryStructure = {
      getUser: jest.fn().mockRejectedValue("error"),
    };

    const usersController = new UserController(usersRepository);

    jwt.sign = jest.fn().mockReturnValue(token);

    test("Then it should call status method with status code 401", async () => {
      const expectedStatusError = 401;

      await usersController.loginUser(
        req as UserCredentialsRequest,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusError);
    });

    test("Then it should call the json method of the response with 'Wrong credentials' message ", async () => {
      const expectedMessageError = { error: "Wrong credentials" };

      await usersController.loginUser(
        req as UserCredentialsRequest,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith(expectedMessageError);
    });
  });
});
