import "../../../../server/index";
import app from "../../../../server/app";
import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import { connectToDatabase } from "../../../../database";
import mongoose from "mongoose";
import Transformer from "../../models/Transformer.js";
import transformersMocks from "../../mocks/transformersMocks";
import { type TransformerStructure } from "../../types";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoDbUrl = server.getUri();
  await connectToDatabase(mongoDbUrl);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});

describe("Given a GET /Transfomers endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with status code 200 and a list of transformer 'Optimus Prime' and 'Megatron' ", async () => {
      const expectedStatusCode = 200;
      const path = "/transformers";

      await Transformer.create(transformersMocks[0]);
      await Transformer.create(transformersMocks[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = (await response.body) as {
        transformers: TransformerStructure[];
      };

      responseBody.transformers.forEach((transformer, transformerPosition) => {
        expect(transformer).toHaveProperty(
          "name",
          transformersMocks[transformerPosition].name,
        );
      });
    });
  });
});
