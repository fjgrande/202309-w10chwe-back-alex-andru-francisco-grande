import transfomersMocks from "../../mocks/transformersMocks";
import { type Request, type Response } from "express";
import { type CustomResponse } from "../../../../types";
import { type TransformerData, type TransformersRepository } from "../../types";
import TransformersController from "../transformersController";

describe("Given a TransformersController's getTransformers method", () => {
  describe("When it receives a response", () => {
    const transformers: TransformerData[] = transfomersMocks;

    const transformersRepository: TransformersRepository = {
      getTransformers: jest.fn().mockResolvedValue(transformers),
    };

    const transformersController = new TransformersController(
      transformersRepository,
    );

    const req = {};
    const res: CustomResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call its method status with 200", async () => {
      const expectedStatusCode = 200;

      await transformersController.getTransformers(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with Optimus Prime and Megatron", async () => {
      const expectedTransformers = transformers;

      await transformersController.getTransformers(
        req as Request,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({
        transformers: expectedTransformers,
      });
    });
  });
});
