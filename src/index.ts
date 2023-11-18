import chalk from "chalk";
import { connectToDatabase } from "./database/index.js";
import { startServer } from "./server/app.js";

const port = process.env.POR ?? 4000;

if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Missing connection database"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);
startServer(+port);
