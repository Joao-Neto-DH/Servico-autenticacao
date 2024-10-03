import { ILoginRequest } from "../../controllers/autenticacao/login";
import { checkPassword } from "../../helpers/check-password";
import ILoginModel from "./model/ILogin.model";
import { IUsuario } from "./model/IRegisto.model";

class LoginService {
  constructor(private readonly model: ILoginModel) {}

  async logar(usuario: ILoginRequest): Promise<IUsuario | undefined> {
    const user = await this.model.getUsuarioPeloContacto(usuario);

    if (user) {
      const isCorrectPassword = checkPassword(user.senha, usuario.senha);

      const { senha, ...loginUser } = user;

      return isCorrectPassword ? loginUser : undefined;
    }

    return user;
  }
}

export default LoginService;
