import { NextFunction, Request, Response } from "express";
import { validateLoginToken } from "../helpers/login-token";

function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization = req.header("authorization");

  if (authorization === undefined) {
    return res.status(401).json({
      error: "Não autorizado",
      message: "Token requerido",
    });
  }

  const [bearer, token] = authorization.split(" ");
  if (bearer.toLowerCase() !== "bearer") {
    return res.status(401).json({
      error: "Não autorizado",
      message: "Token inválido. Token deve ser do tipo BEARER",
    });
  }

  try {
    const { usuarioID: userId } = validateLoginToken(token);
    req.headers.userId = JSON.stringify(userId);

    return next();
  } catch (error) {
    return res.status(403).json({
      error: "Não autorizado",
      message: "Token expirado ou token inválido",
    });
  }
}

export { loginMiddleware };
