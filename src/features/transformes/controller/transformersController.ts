import { type Request, type Response } from "express";
import { type TransformersRepository } from "../types";

class TransformersController {
  constructor(
    private readonly transformersRepository: TransformersRepository,
  ) {}

  public getTransformers = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const transformers = await this.transformersRepository.getTransformers();
    res.status(200).json({ transformers });
  };
}

export default TransformersController;
