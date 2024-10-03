import ILoginModel, { IUsuario } from "./ILogin.model";

class LoginModel implements ILoginModel {
  async getUsuarioPeloContacto(usuario: string): Promise<IUsuario | undefined> {
    throw new Error("Method not implemented.");
  }
}

export default LoginModel;
