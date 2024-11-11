import { clientDB } from "../../../config/db-connector";
import { TProfile } from "./IUserProfile.model";
import IUserSenhaModel from "./IUserSenha.model";

class UserSenhaModel implements IUserSenhaModel {
  async getUsuarioPeloId(userId: string): Promise<{ senha: string } | null> {
    const user = await clientDB.user.findFirst({
      where: { id: userId },
      select: {
        senha: true,
      },
    });

    await clientDB.$disconnect();

    return user;
  }

  async updateSenhaUsuario(
    userId: string,
    novaSenha: string
  ): Promise<TProfile> {
    const user = await clientDB.user.update({
      data: {
        senha: novaSenha,
      },
      where: { id: userId },
      select: {
        id: true,
        contacto: true,
        created_at: true,
        genero: true,
        nome: true,
        session: { select: { id: true, created_at: true, user_agent: true } },
        updated_at: true,
      },
    });

    await clientDB.$disconnect();

    return user;
  }
}

export default UserSenhaModel;
