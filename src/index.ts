import "dotenv/config";
import express from "express";
import { getSafeEnv } from "./utils/getSafeEnv";

const app = express();
const port = getSafeEnv("PORT");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
