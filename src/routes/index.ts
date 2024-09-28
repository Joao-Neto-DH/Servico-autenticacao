import { Router } from "express";
import autenticacaoRouter from "./autenticacao.route";

const router = Router({});

router.use("/autenticacao", autenticacaoRouter);

export { router };
