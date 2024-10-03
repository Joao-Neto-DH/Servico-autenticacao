import LoginService from "../../services/autenticacao/Login.service";
import LoginModel from "../../services/autenticacao/model/Login.model";
import RegistoModel from "../../services/autenticacao/model/Registo.model";
import RegistoService from "../../services/autenticacao/Registo.service";
import AlterarSenhaController from "./alterar-senha";
import LoginController from "./login";
import RecuperaSenhaController from "./recupera-senha";
import RegistoController from "./registo";

const service = {};

const recuperaSenhaController = new RecuperaSenhaController(service);

// registo do usuário
const registoService = new RegistoService(new RegistoModel());
const registoController = new RegistoController(registoService);

// login do usuário
const loginService = new LoginService(new LoginModel());
const loginController = new LoginController(loginService);

const alterarSenhaController = new AlterarSenhaController(service);

export {
  recuperaSenhaController,
  registoController,
  loginController,
  alterarSenhaController,
};
