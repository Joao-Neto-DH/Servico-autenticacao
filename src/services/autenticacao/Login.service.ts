import { ILoginRequest } from "../../controllers/autenticacao/login";
import { checkPassword } from "../../helpers/check-password";
import { loginToken } from "../../helpers/login-token";
import ILoginModel from "./model/ILogin.model";
import { IUsuario } from "./model/IRegisto.model";

class LoginService {
  constructor(private readonly model: ILoginModel) {}

  async logar(
    usuario: ILoginRequest
  ): Promise<{ usuario: IUsuario; accessToken: string } | undefined> {
    const user = await this.model.getUsuarioPeloContacto(usuario.contacto);

    if (user && checkPassword(user.senha, usuario.senha)) {
      const token = loginToken(user.id);

      const { senha, ...loginUser } = user;

      return { accessToken: token, usuario: loginUser };
    }

    return undefined;
  }
}

export default LoginService;
