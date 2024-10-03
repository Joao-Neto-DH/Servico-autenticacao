import LoginService from "../../services/autenticacao/Login.service";
import LoginModel from "../../services/autenticacao/model/Login.model";
import RecuperaSenhaModel from "../../services/autenticacao/model/RecuperacaoSenha.model";
import RegistoModel from "../../services/autenticacao/model/Registo.model";
import RecuperaSenhaService from "../../services/autenticacao/RecuperaSenha.service";
import RegistoService from "../../services/autenticacao/Registo.service";
import AlterarSenhaController from "./alterar-senha";
import LoginController from "./login";
import RecuperaSenhaController from "./recupera-senha";
import RegistoController from "./registo";

// recuperacao de senha
const recuperacaoSenhaService = new RecuperaSenhaService(
  new RecuperaSenhaModel()
);
const recuperaSenhaController = new RecuperaSenhaController(
  recuperacaoSenhaService
);

// alterar senha
const alterarSenhaController = new AlterarSenhaController(
  recuperaSenhaController
);

// registo do usuário
const registoService = new RegistoService(new RegistoModel());
const registoController = new RegistoController(registoService);

// login do usuário
const loginService = new LoginService(new LoginModel());
const loginController = new LoginController(loginService);

export {
  recuperaSenhaController,
  registoController,
  loginController,
  alterarSenhaController,
};
