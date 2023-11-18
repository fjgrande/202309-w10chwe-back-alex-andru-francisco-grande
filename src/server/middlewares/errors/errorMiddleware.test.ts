import { type Request, type Response } from "express";
import { type CustomResponse } from "../../../types";
import { notFound } from "./errorMiddleware";

const req = {};
const res: CustomResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a notFoundError middleware", () => {
  describe("When it invoked", () => {
    notFound(req as Request, res as Response);

    test("Then it should reponse's a 404 status code", () => {
      const expectedStatus = 404;

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should reponse's method json with 'Endpoint not found'", () => {
      const expectedMessage = { error: "Endpoint not found" };

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
