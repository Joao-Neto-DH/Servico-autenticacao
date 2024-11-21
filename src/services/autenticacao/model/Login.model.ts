import { clientDB } from "../../../config/db-connector";
import { dataFormat } from "../../../helpers/format-data";
import ILoginModel, { IUsuario } from "./ILogin.model";
import ISessionModel, { TSession } from "./ISession.model";
import SessionModel from "./Session.model";

const USER_SELECTED_FIELD = {
  id: true,
  nome: true,
  genero: true,
  contacto: true,
  senha: true,
  created_at: true,
  updated_at: true,
};

class LoginModel implements ILoginModel, ISessionModel {
  async execute({
    session_token,
    user_agent,
    userId,
  }: TSession): Promise<string> {
    const sessionModel = new SessionModel();

    return await sessionModel.execute({ session_token, user_agent, userId });
  }

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
