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

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      errorMessage: err.message,
      status: err.status,
    });
  } else {
    return res.status(500).json({
      errorMessage: "Erro no servidor",
      status: 500,
    });
  }
});

export { app };
