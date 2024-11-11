import * as jwt from "jsonwebtoken";
import { envConfig } from "../config/env-config";

export function loginToken(usuarioID: string) {
  return jwt.sign({ usuarioID }, envConfig().SESSION_PASSWORD!, {
    expiresIn: "3d",
  });
}

export function validateLoginToken(token: string) {
  return jwt.verify(token, envConfig().SESSION_PASSWORD!) as {
    usuarioID: string;
  };
}
