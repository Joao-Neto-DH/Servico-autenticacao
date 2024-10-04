import {
  loginService,
  recuperacaoSenhaService,
  registoService,
} from "../../services/autenticacao";
import AlterarSenhaController from "./alterar-senha";
import LoginController from "./login";
import RecuperaSenhaController from "./recupera-senha";
import RegistoController from "./registo";

// recuperacao de senha
const recuperaSenhaController = new RecuperaSenhaController(
  recuperacaoSenhaService
);

// alterar senha
const alterarSenhaController = new AlterarSenhaController(
  recuperaSenhaController
);

// registo do usuário
const registoController = new RegistoController(registoService);

// login do usuário
const loginController = new LoginController(loginService);

export {
  recuperaSenhaController,
  registoController,
  loginController,
  alterarSenhaController,
};
