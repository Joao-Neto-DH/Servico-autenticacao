import AlterarSenhaController from "./alterar-senha";
import LoginController from "./login";
import RecuperaSenhaController from "./recupera-senha";
import RegistoController from "./registo";

const service = {};

const recuperaSenhaController = new RecuperaSenhaController(service);
const registoController = new RegistoController(service);
const loginController = new LoginController(service);
const alterarSenhaController = new AlterarSenhaController(service);

export {
  recuperaSenhaController,
  registoController,
  loginController,
  alterarSenhaController,
};
