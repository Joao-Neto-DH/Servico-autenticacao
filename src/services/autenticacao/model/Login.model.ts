import { clientDB } from "../../../config/db-connector";
import { dataFormat } from "../../../helpers/format-data";
import ILoginModel, { IUsuario } from "./ILogin.model";

const USER_SELECTED_FIELD = {
  id: true,
  nome: true,
  genero: true,
  contacto: true,
  senha: true,
  created_at: true,
  updated_at: true,
};

class LoginModel implements ILoginModel {
  async getUsuarioPeloContacto(
    contacto: string
  ): Promise<IUsuario | undefined> {
    const usuario = await clientDB.user.findFirst({
      where: {
        contacto,
      },
      select: USER_SELECTED_FIELD,
    });

    await clientDB.$disconnect();

    if (!usuario) return undefined;

    const { created_at, updated_at, ...user } = usuario;

    return {
      ...user,
      createdAt: dataFormat(created_at),
      updatedAt: dataFormat(updated_at),
      lastLogin: "",
    };
  }
}

export default LoginModel;
