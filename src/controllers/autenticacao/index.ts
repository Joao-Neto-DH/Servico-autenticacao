import {
  loginService,
  perfilService,
  recuperacaoSenhaService,
  registoService,
  userSenhaService,
} from "../../services/autenticacao";
import AlterarSenhaController from "./alterar-senha";
import LoginController from "./login";
import PerfilController from "./perfil";
import RecuperaSenhaController from "./recupera-senha";
import RegistoController from "./registo";

// recuperacao de senha
const recuperaSenhaController = new RecuperaSenhaController(
  recuperacaoSenhaService
);

// alterar senha
const alterarSenhaController = new AlterarSenhaController(userSenhaService);

// registo do usuário
const registoController = new RegistoController(registoService);

// login do usuário
const loginController = new LoginController(loginService);

// perfil de usuário
const perfilController = new PerfilController(perfilService);

export {
  recuperaSenhaController,
  registoController,
  loginController,
  alterarSenhaController,
  perfilController,
};
