import dayjs from "dayjs";
import { clientDB } from "../../../config/db-connector";
import { IRegistoRequest } from "../../../controllers/autenticacao/registo";
import IRegistoModel, { IUsuario } from "./IRegisto.model";

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

    return {
      ...user,
      createdAt: dayjs(created_at).format("DD/MM/YYYY"),
      updatedAt: dayjs(updated_at).format("DD/MM/YYYY"),
      lastLogin: "",
    };
  }
  async contactoJaExiste(contacto: string): Promise<boolean> {
    const user = await clientDB.user.findFirst({
      where: {
        contacto,
      },
    });

    return user !== null;
  }
}

export default RegistoModel;
