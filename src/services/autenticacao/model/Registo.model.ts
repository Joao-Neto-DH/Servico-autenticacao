import { clientDB } from "../../../config/db-connector";
import { IRegistoRequest } from "../../../controllers/autenticacao/registo";
import IRegistoModel, { IUsuario } from "./IRegisto.model";
import { dataFormat } from "../../../helpers/format-data";

const USER_SELECTED_FIELD = {
  id: true,
  nome: true,
  genero: true,
  contacto: true,
  created_at: true,
  updated_at: true,
};

class RegistoModel implements IRegistoModel {
  async registarUsuario(usuario: IRegistoRequest): Promise<IUsuario> {
    const { created_at, updated_at, ...user } = await clientDB.user.create({
      data: {
        nome: usuario.nome,
        contacto: usuario.contacto,
        genero: usuario.genero === "M" ? "M" : "F",
        senha: usuario.senha,
      },
      select: USER_SELECTED_FIELD,
    });

    await clientDB.$disconnect();

    return {
      ...user,
      createdAt: dataFormat(created_at),
      updatedAt: dataFormat(updated_at),
      lastLogin: "",
    };
  }
  async contactoJaExiste(contacto: string): Promise<boolean> {
    const user = await clientDB.user.findFirst({
      where: {
        contacto,
      },
    });

    await clientDB.$disconnect();

    return user !== null;
  }
}

export default RegistoModel;
