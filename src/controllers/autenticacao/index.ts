import RegistoModel from "../../services/autenticacao/model/Registo.model";
import RegistoService from "../../services/autenticacao/Registo.service";
import AlterarSenhaController from "./alterar-senha";
import LoginController from "./login";
import RecuperaSenhaController from "./recupera-senha";
import RegistoController from "./registo";

const service = {};

const recuperaSenhaController = new RecuperaSenhaController(service);

const registoService = new RegistoService(new RegistoModel());
const registoController = new RegistoController(registoService);

const loginController = new LoginController(service);

const alterarSenhaController = new AlterarSenhaController(service);

export {
  recuperaSenhaController,
  registoController,
  loginController,
  alterarSenhaController,
};
