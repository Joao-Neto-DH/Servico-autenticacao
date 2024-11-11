import LoginService from "./Login.service";
import LoginModel from "./model/Login.model";
import RecuperaSenhaModel from "./model/RecuperacaoSenha.model";
import RegistoModel from "./model/Registo.model";
import UserProfileModel from "./model/UserProfile.model";
import UserSenhaModel from "./model/UserSenha.model";
import RecuperaSenhaService from "./RecuperaSenha.service";
import RegistoService from "./Registo.service";
import UserProfileService from "./UserProfile.service";
import UserSenhaService from "./UserSenha.service";

// registo
const registoService = new RegistoService(new RegistoModel());

// recuperação de senha
const recuperacaoSenhaService = new RecuperaSenhaService(
  new RecuperaSenhaModel()
);

// login de usuário
export const modelLogin = new LoginModel();
const loginService = new LoginService(modelLogin);

// perfil de usuário
const perfilModel = new UserProfileModel();
const perfilService = new UserProfileService(perfilModel);

// alteração de senhas
const senhaModel = new UserSenhaModel();
const userSenhaService = new UserSenhaService(senhaModel);

export {
  registoService,
  recuperacaoSenhaService,
  loginService,
  perfilService,
  userSenhaService,
};
