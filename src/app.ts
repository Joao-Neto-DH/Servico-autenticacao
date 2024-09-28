import express from "express";
import { router } from "./routes";
import { config } from "dotenv";
import { getSanitzedConfig } from "./config/env-config";
import { json } from "body-parser";

config();

getSanitzedConfig(process.env);

const app = express();

app.use(json());

app.get("/", (_, res) => {
  return res.json("Servidor ok");
});

app.use("/v1", router);

export { app };
