import { Schema, model } from "mongoose";
import { type TransformerStructure } from "../types";

const transfomerSchema = new Schema<TransformerStructure>({
  name: {
    type: String,
    required: true,
  },
  faction: {
    type: String,
    required: true,
  },
  vehicleMode: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  resistance: {
    type: Number,
    required: true,
  },
});

const Transformer = model("Transformer", transfomerSchema, "transformers");

export default Transformer;
