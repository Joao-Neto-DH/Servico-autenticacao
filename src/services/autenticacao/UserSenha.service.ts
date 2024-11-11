import { IAlterarSenhaRequest } from "../../controllers/autenticacao/alterar-senha";
import AppError from "../../helpers/app-error";
import { checkPassword } from "../../helpers/check-password";
import { encriptarSenha } from "../../helpers/encriptar-senha";
import IUserSenhaModel from "./model/IUserSenha.model";

class UserSenhaService {
  constructor(private readonly model: IUserSenhaModel) {}

  /**
   * execute
   */
  public async execute(data: IAlterarSenhaRequest) {
    const user = await this.model.getUsuarioPeloId(data.usuarioId);

    if (!user) {
      throw new AppError("Usuário não encontrado", 404);
    }

    if (checkPassword(user.senha, data.senha_actual)) {
      const senhaEncriptada = encriptarSenha(data.nova_senha);

      const usuario = await this.model.updateSenhaUsuario(
        data.usuarioId,
        senhaEncriptada
      );

      return usuario;
    } else {
      throw new AppError("Senha actual inválida", 401);
    }
  }
}

export default UserSenhaService;
