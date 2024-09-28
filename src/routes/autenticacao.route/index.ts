import { Router } from "express";
import { autenticacao } from "../../controllers";
import { IRegistoRequest } from "../../controllers/autenticacao/registo";
import {
  IRecuperaSenhaRequest,
  IRecuperaSenhaSolicitacaoRequest,
} from "../../controllers/autenticacao/recupera-senha";

const autenticacaoRouter = Router();

autenticacaoRouter.post("/cria-conta", (req, res) => {
  const data: IRegistoRequest = req.body;

  const resposta = autenticacao.registoController.execute(data);

  return res.json(resposta);
});

autenticacaoRouter.get("/recupera-senha/:contacto", (req, res) => {
  const data: IRecuperaSenhaSolicitacaoRequest = {
    contacto: req.params.contacto,
  };

  const resposta = autenticacao.recuperaSenhaController.solitacao(data);

  return res.json(resposta);
});

autenticacaoRouter.patch("/recupera-senha/nova-senha/:token", (req, res) => {
  const data: IRecuperaSenhaRequest = req.body;

  const resposta = autenticacao.recuperaSenhaController.execute(data);

  return res.json(resposta);
});

export default autenticacaoRouter;
