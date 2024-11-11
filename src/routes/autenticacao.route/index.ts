import { Router } from "express";
import { autenticacao } from "../../controllers";
import { IRegistoRequest } from "../../controllers/autenticacao/registo";
import { IRecuperaSenhaRequest } from "../../controllers/autenticacao/recupera-senha";
import { ILoginRequest } from "../../controllers/autenticacao/login";
import { usuarioRegistoSchema } from "../../schemas/registo-usuario.schema";
import { loginSchema } from "../../schemas/login.schema";
import {
  recuperarSenhaSchema,
  recuperarSenhaSchemaContacto,
} from "../../schemas/recuperacao-senha.schema";
import { loginMiddleware } from "../../middlewares/login-middleware";
import { perfilController } from "../../controllers/autenticacao";

const autenticacaoRouter = Router();

autenticacaoRouter.post("/cria-conta", async (req, res) => {
  const data: IRegistoRequest = req.body;

  try {
    const usuario = usuarioRegistoSchema.parse(data);
    const resposta = await autenticacao.registoController.execute(usuario);

    return res.json(resposta);
  } catch (error) {
    return res.status(400).json(error);
  }
});

autenticacaoRouter.post("/entrar", async (req, res) => {
  const data: ILoginRequest = req.body;

  try {
    const loginData = loginSchema.parse(data);

    const resposta = await autenticacao.loginController.execute(loginData);
    return res.json(resposta);
  } catch (error) {
    return res.status(400).json(error);
  }
});

autenticacaoRouter.get("/recupera-senha/:contacto", async (req, res) => {
  try {
    const contacto = recuperarSenhaSchemaContacto.parse(req.params.contacto);

    const resposta = await autenticacao.recuperaSenhaController.solitacao({
      contacto,
    });
    return res.json(resposta);
  } catch (error) {
    return res.status(400).json(error);
  }
});

autenticacaoRouter.patch(
  "/recupera-senha/nova-senha/:token",
  async (req, res) => {
    const { senha }: IRecuperaSenhaRequest = req.body;
    const { token } = req.params;

    try {
      const dataParsed = recuperarSenhaSchema.parse({
        senha,
        token,
      });

      const resposta = await autenticacao.recuperaSenhaController.execute(
        { senha: dataParsed.senha },
        dataParsed.senha
      );

      return res.json(resposta);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
);

autenticacaoRouter.get("/conta", loginMiddleware, async (req, res) => {
  const userId = JSON.parse(req.headers.userId?.toString()!);

  const perfil = await perfilController.execute(userId);

  return res.json(perfil);
});

export default autenticacaoRouter;
