import chalk from "chalk";
import mongoose from "mongoose";

export const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    console.log(chalk.blue("Connected to databse"));
  } catch (error) {
    console.log(chalk.red("Falided connecting to database"));
  }
};
