import * as jwt from "jsonwebtoken";
import { envConfig } from "../config/env-config";

export function loginToken(usuarioID: string) {
  return jwt.sign(usuarioID, envConfig().SESSION_PASSWORD!);
}
