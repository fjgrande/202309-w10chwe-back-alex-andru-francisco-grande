import { type Types } from "mongoose";

export interface TransformerData {
  name: string;
  faction: string;
  vehicleMode: string;
  imageUrl: string;
  speed: number;
  resistance: number;
}

export interface TransformerStructure extends TransformerData {
  _id: Types.ObjectId;
}

export interface TransformersRepository {
  getTransformers: () => Promise<TransformerStructure[]>;
}
