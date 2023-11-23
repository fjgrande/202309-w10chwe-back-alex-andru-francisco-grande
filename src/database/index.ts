import chalk from "chalk";
import mongoose from "mongoose";
import createDebug from "debug";

const debug = createDebug("transformers:database");

export const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    debug(chalk.blue("Connected to database"));
  } catch (error) {
    debug(chalk.red("Failed connecting to database"));
  }
};
