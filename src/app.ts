import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import { config } from "dotenv";
import { getSanitzedConfig } from "./config/env-config";
import { json } from "body-parser";
import AppError from "./helpers/app-error";

config();

getSanitzedConfig(process.env);

const app = express();

app.use(json());

app.get("/", (_, res) => {
  return res.json("Servidor ok");
});

app.use("/v1", router);

app.use((err: AppError, _: Request, res: Response, next: NextFunction) => {
  console.error(err.status);
  res.status(err.status).send({
    errorMessage: err.message,
    status: err.status,
  });
});

export { app };
