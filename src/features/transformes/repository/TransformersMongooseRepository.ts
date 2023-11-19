import Transformer from "../models/Transformer.js";
import {
  type TransformersRepository,
  type TransformerStructure,
} from "../types";

class TransformersMongooseRepository implements TransformersRepository {
  public async getTransformers(): Promise<TransformerStructure[]> {
    const transformers = await Transformer.find();

    return transformers;
  }
}

export default TransformersMongooseRepository;
