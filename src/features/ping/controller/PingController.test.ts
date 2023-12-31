import { type Request, type Response } from "express";
import { type CustomResponse } from "../../../types";
import PingController from "./PingController";

describe("Given a PingController's controller", () => {
  describe("When it receives a response", () => {
    const pingController = new PingController();
    const req = {};
    const res: CustomResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    pingController.getPong(req as Request, res as Response);

    test("Then it should call its method status with 200", () => {
      const expectedStatus = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call its method json with message '🏓'", () => {
      const expectedMessage = { message: "🏓" };

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
