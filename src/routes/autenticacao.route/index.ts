import { Router } from "express";
import { autenticacao } from "../../controllers";
import { IRegistoRequest } from "../../controllers/autenticacao/registo";
import {
  IRecuperaSenhaRequest,
  IRecuperaSenhaSolicitacaoRequest,
} from "../../controllers/autenticacao/recupera-senha";
import { ILoginRequest } from "../../controllers/autenticacao/login";

const autenticacaoRouter = Router();

autenticacaoRouter.post("/cria-conta", async (req, res) => {
  const data: IRegistoRequest = req.body;

  const resposta = await autenticacao.registoController.execute(data);

  return res.json(resposta);
});

autenticacaoRouter.post("/entrar", async (req, res) => {
  const data: ILoginRequest = req.body;

  const resposta = await autenticacao.loginController.execute(data);

  return res.json(resposta);
});

autenticacaoRouter.get("/recupera-senha/:contacto", async (req, res) => {
  const data: IRecuperaSenhaSolicitacaoRequest = {
    contacto: req.params.contacto,
  };

  const resposta = await autenticacao.recuperaSenhaController.solitacao(data);

  return res.json(resposta);
});

autenticacaoRouter.patch(
  "/recupera-senha/nova-senha/:token",
  async (req, res) => {
    const data: IRecuperaSenhaRequest = req.body;
    const { token } = req.params;

    const resposta = await autenticacao.recuperaSenhaController.execute(
      data,
      token
    );

    return res.json(resposta);
  }
);

export default autenticacaoRouter;
