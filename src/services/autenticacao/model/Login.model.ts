import { ILoginRequest } from "../../../controllers/autenticacao/login";
import ILoginModel, { IUsuario } from "./ILogin.model";

class LoginModel implements ILoginModel {
  async getUsuarioPeloContacto(usuario: ILoginRequest): Promise<IUsuario> {
    throw new Error("Method not implemented.");
  }
}

export default LoginModel;
