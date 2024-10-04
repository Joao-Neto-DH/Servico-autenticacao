import LoginService from "./Login.service";
import LoginModel from "./model/Login.model";
import RecuperaSenhaModel from "./model/RecuperacaoSenha.model";
import RegistoModel from "./model/Registo.model";
import RecuperaSenhaService from "./RecuperaSenha.service";
import RegistoService from "./Registo.service";

const registoService = new RegistoService(new RegistoModel());

const recuperacaoSenhaService = new RecuperaSenhaService(
  new RecuperaSenhaModel()
);

export const modelLogin = new LoginModel();
const loginService = new LoginService(modelLogin);

export { registoService, recuperacaoSenhaService, loginService };
